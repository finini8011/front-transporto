import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statesApiSlice = createApi({
  reducerPath: "statesApiSlice",
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
  tagTypes: ["StatesPESV"],
  endpoints: (builder) => ({
    getStatePESV: builder.query({
      query: () => {
        return {
          url: `/steps/substates`,
          method: "GET",
        };
      },
      providesTags: ["StatesPESV"],
      invalidatesTags: ["StatesPESV"],
    }),
  }),
});
export const { useGetStatePESVQuery} = statesApiSlice;
