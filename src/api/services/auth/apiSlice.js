import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
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
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `/users/0/get_permission_users`,
        method: "GET",
      }),
      providesTags: ["Auth"],
      invalidatesTags: ["Auth"],
    }),
    getUser: builder.query({
      query: (userId) => ({
        url: `/users/${userId}/get_permission_users`,
        method: "GET",
      }),
      providesTags: ["Auth"],
      invalidatesTags: ["Auth"],
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: `/signup`,
        method: "POST",
        body: newUser,
      }),
      providesTags: ["Auth"],
      invalidatesTags: ["Auth"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["Auth"],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "POST",
      }),
    }),
    newUser: builder.mutation({
      query: (user) => ({
        url: `/add_permissions_user`,
        method: "POST",
        body: user,
      }),
      providesTags: ["Auth"],
      invalidatesTags: ["Auth"],
    }),
    editUser: builder.mutation({
      query: (newUser) => ({
        url: `/edit_permissions_user`,
        method: "POST",
        body: newUser,
      }),
      providesTags: ["Auth"],
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useCreateUserMutation,
  useLogOutUserMutation,
  useNewUserMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useEditUserMutation
} = apiSlice;
