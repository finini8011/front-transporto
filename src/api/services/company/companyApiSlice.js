import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApiSlice = createApi({
  reducerPath: "companyApiSlice",
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
  tagTypes: ["Company"],
  endpoints: (builder) => ({
    saveCompany: builder.mutation({
      query: (args) => {
        // Destructuring Object

        return {
          // Returns url with multiple args
          url: `/compania/create`,
          method: "POST",
          body: args,
        };
      },
      providesTags: ["Company"],
      invalidatesTags: ["Company"],
    }),
    getCIIU: builder.query({
      query: () => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/ciiu`,
          method: "GET",
        };
      },
      providesTags: ["Company"],
      invalidatesTags: ["Company"],
    }),
    getDepartments: builder.query({
      query: () => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/departamentos`,
          method: "GET",
        };
      },
      providesTags: ["Company"],
      providesTags: ["Company"],
    }),
    getCitiesOfDepartment: builder.query({
      query: (idDepartment) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/ciudades/${idDepartment}`,
          method: "GET",
        };
      },
      providesTags: ["Company"],
      providesTags: ["Company"],
    }),
    validateNIT: builder.query({
      query: (NIT) => {
        // retorna true si el nit existe
        return {
          url: `/compania/validate/${NIT}`,
          method: "GET",
        };
      },
      providesTags: ["Company"],
      providesTags: ["Company"],
    }),
    getCompany: builder.query({
      query: () => {
        // retorna true si el nit existe
        return {
          url: `/compania/show`,
          method: "GET",
        };
      },
      providesTags: ["Company"],
      providesTags: ["Company"],
    }),
    updateCompany: builder.mutation({
      query: (args) => {
        // Destructuring Object

        return {
          // Returns url with multiple args
          url: `/compania/modify`,
          method: "POST",
          body: args,
        };
      },
      providesTags: ["Company"],
      invalidatesTags: ["Company"],
    }),
  }),
});

export const { useSaveCompanyMutation, useGetCIIUQuery, useGetDepartmentsQuery, useLazyGetCitiesOfDepartmentQuery, useLazyValidateNITQuery, useGetCompanyQuery, useUpdateCompanyMutation } = companyApiSlice;
