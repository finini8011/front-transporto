import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stepsApiSlice = createApi({
  reducerPath: "steps",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-transporto.herokuapp.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.authState.token; //posiblemente se tenga que cambiar donde se encuentre el token
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // refetchOnFocus:true,
  tagTypes: ["Steps"],
  endpoints: (builder) => ({
    getDataStep: builder.query({
    query: (numStep) =>`steps/${numStep}/get_data`,
    providesTags: ["Steps"],
    invalidatesTags: ["Steps"],

    
    }),
  }),
});
console.log(stepsApiSlice)

export const { useGetDataStepQuery } = stepsApiSlice;
