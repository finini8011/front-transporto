import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const calendarApiSlice = createApi({
  reducerPath: "Calendar",
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
  tagTypes: ["Calendar"],
  endpoints: (builder) => ({
    getDataCalendar: builder.query({
      query: () => {
        return {
          url: `/steps/events`,
          method: "GET",
        };
      },
      providesTags: ["Calendar"],
      providesTags: ["Calendar"],
    }),
    saveCalendarQuestion: builder.mutation({
      query: ({ payload }) => {
        return {
          url: `steps/save_events`,
          method: "POST",
          body: {payload},
        };
      },
      providesTags: ["Calendar"],
      invalidatesTags: ["Calendar"],
    }),
    editCalendarQuestion: builder.mutation({
      query: ({ payload }) => {
        return {
          url: `steps/update_events`,
          method: "POST",
          body: {payload},
        };
      },
      providesTags: ["Calendar"],
      invalidatesTags: ["Calendar"],
    }),
    deleteCalendarQuestion: builder.mutation({
      query: ({ payload }) => {
        return {
          url: `steps/delete_events`,
          method: "POST",
          body: {payload},
        };
      },
      providesTags: ["Calendar"],
      invalidatesTags: ["Calendar"],
    }),
  }),
});
export const {
  useGetDataCalendar,
  useSaveCalendarQuestion,
  useSaveCalendarQuestionMutation,
  useLazyGetDataCalendarQuery,
  useEditCalendarQuestionMutation,
  useDeleteCalendarQuestionMutation
} = calendarApiSlice;
