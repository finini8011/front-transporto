import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subStepsApiSlice = createApi({
  reducerPath: "subSteps",
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
  tagTypes: ["SubSteps"],
  endpoints: (builder) => ({
    getCollaboratosSubStep522: builder.query({
      query: () => {
        // retorna true si el nit existe
        return {
          url: `/steps/get_collaborators_survey`,
          method: "GET",
        };
      },
      providesTags: ["SubSteps"],
      providesTags: ["SubSteps"],
    }),
    saveSurvey: builder.mutation({
      query: (data) => {
        return {
          // Returns url with multiple args
          url: `/steps/save_survey`,
          method: "POST",
          body: data,
        };
      },
      providesTags: ["SubSteps"],
      invalidatesTags: ["SubSteps"],
    }),

  }),
});
export const {
  useSaveSurveyMutation,
  useGetCollaboratosSubStep522Query,
} = subStepsApiSlice;
