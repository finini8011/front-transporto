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
      query: (numStep) => `steps/${numStep}/get_data`,
      providesTags: ["Steps"],
      invalidatesTags: ["Steps"],
    }),
    saveStep: builder.mutation({
      query: ({ numStep, payload, file }) => {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
          formData.append(`payload[${key}]`, value);
        });

        formData.append("file", file);

        return {
          // Returns url with multiple args
          url: `/steps/${numStep}/load_file`,
          method: "POST",
          body: formData,
        };
      },
      providesTags: ["Steps"],
      invalidatesTags: ["Steps"],
    }),
    saveStepQuestion: builder.mutation({
      query: ({ numStep, payload }) => {
       
        const payload2 = {
          payload:[
            payload
          ]
        }
        return {
          // Returns url with multiple args
          url: `/steps/${numStep}/update`,
          method: "POST",
          body: payload2,
        };
      },
      providesTags: ["Steps"],
      invalidatesTags: ["Steps"],
    }),
    getStateSteps: builder.query({
      query: (nivel) => {
        return {
          url: `/steps/states`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetDataStepQuery, useSaveStepMutation, useSaveStepQuestionMutation, useGetStateStepsQuery } = stepsApiSlice;
