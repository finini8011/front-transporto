import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listVerificationApiSlice = createApi({
  reducerPath: "listVerificationApiSlice",
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
  tagTypes: ["ListVerification"],
  endpoints: (builder) => ({
    getQuadrant: builder.query({
      query: ({ userId, projectId }) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `${urlQuadrant}/test/users/${userId}/projects/${projectId}`,
          method: "GET",
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
    saveListVerification: builder.mutation({
      query: (args) => {
        // Destructuring Object

        const { empresa, NIT, misionalidad, objeto_social, representante_legal, cantidad_vehiculos, cantidad_conductores, verificacion_realizada, funcionarios, pasos } = args;

        const data = {
          payload: {
            empresa,
            NIT,
            misionalidad,
            objeto_social,
            representante_legal,
            cantidad_vehiculos,
            cantidad_conductores,
            verificacion_realizada,
            funcionarios,
            pasos
          }
        }

        return {
          // Returns url with multiple args
          url: `/listaverificacion`,
          method: "POST",
          body: data,
        };
      },
      providesTags: ["ListVerification"],
      invalidatesTags: ["ListVerification"],
    }),
    updateQuadrantItem: builder.mutation({
      query: (args) => {
        // Destructuring Object
        const { quadrantNumber, projectId, userId, url, quadrantItemType, quadrantItemId } = args;

        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}`,
          method: "PUT",
          body: {
            "quadrantNumber": quadrantNumber,
            quadrantItemType,
            "url": url,
            quadrantItemId
        },
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
  }),
});

export const { useGetQuadrantQuery,  useSaveListVerificationMutation, useUpdateQuadrantItemMutation } = listVerificationApiSlice;
