import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import authReducer from "./features/auth/authSlice";
import reportPESVReducer from "./features/reportPESV/report";
import stepsPESVReducer from "./features/stepsPESV/stepsPESV";
import statesPESVReducer from "./features/statesPESV/statesPESV";
import calendarReducer from "./features/calendar/calendar";

import { apiSlice } from "./services/auth/apiSlice";
import { listVerificationApiSlice } from "./services/listVerification/listVerificationApiSlice";
import { stepsApiSlice } from "./services/steps/stepsApiSlice";
import { companyApiSlice } from "./services/company/companyApiSlice";
import { calendarApiSlice } from "./services/calendar/calendarApiSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist:
    [
      "authState",
      "reportPESVState",
      "stepsPESVState",
      "statesPESVState",
      "calendarState"
    ],
};

const rootReducer = combineReducers({
  authState: authReducer,
  reportPESVState: reportPESVReducer,
  stepsPESVState: stepsPESVReducer,
  statesPESVState: statesPESVReducer,
  calendarState: calendarReducer,

  //aqui se pueden agregar mas reducers que quieran persistir
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    [listVerificationApiSlice.reducerPath]: listVerificationApiSlice.reducer,
    [companyApiSlice.reducerPath]: companyApiSlice.reducer,
    [stepsApiSlice.reducerPath]: stepsApiSlice.reducer,
    [calendarApiSlice.reducerPath]: calendarApiSlice.reducer,


    // auth: authReducer,
    auth: persistedReducer,
    reportPESV: persistedReducer,
    stepsPESV: stepsPESVReducer,
    statesPesv: statesPESVReducer,
    calendar: calendarReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, })
      .concat(thunk, apiSlice.middleware)
      // .concat(thunk, projectsApiSlice.middleware)
      .concat(thunk, listVerificationApiSlice.middleware)
      .concat(thunk, companyApiSlice.middleware)
      .concat(thunk, stepsApiSlice.middleware)
      .concat(thunk, calendarApiSlice.middleware)
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
