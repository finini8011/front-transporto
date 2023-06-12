import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./services/auth/apiSlice";
// import { projectsApiSlice } from "./services/projects/projectsApiSlice";
import { listVerificationApiSlice } from "./services/listVerification/listVerificationApiSlice";
import authReducer from "./features/auth/authSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authState" ],
};

const rootReducer = combineReducers({
  authState: authReducer,
  //aqui se pueden agregar mas reducers que quieran persistir
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    // [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
    [listVerificationApiSlice.reducerPath]: listVerificationApiSlice.reducer,
    // auth: authReducer,
    auth: persistedReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false, })
      .concat(thunk, apiSlice.middleware)
      // .concat(thunk, projectsApiSlice.middleware)
      .concat(thunk, listVerificationApiSlice.middleware)
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
