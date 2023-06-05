import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlQuadrant = "https://7j2pv0u3w0.execute-api.us-east-1.amazonaws.com";
const urlFiles = "https://h39bo9i10i.execute-api.us-east-1.amazonaws.com";

export const quadrantsApiSlice = createApi({
  reducerPath: "quadrantsApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.authState.token; //posiblemente se tenga que cambiar donde se encuentre el token
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  // refetchOnFocus:true,
  tagTypes: ["Quadrants"],
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
    updateQuadrant: builder.mutation({
      query: (args) => {
        // Destructuring Object
        const {
          quadrantNumber,
          buttonType,
          buttonText,
          backgroundBase64,
          projectId,
          userId,
        } = args;
        return {
          // Returns url with multiple args
          url: `${urlQuadrant}/test/users/${userId}/projects/${projectId}/quadrant/update`,
          method: "PUT",
          body: {
            quadrantNumber,
            buttonType,
            buttonText,
            backgroundBase64,
          },
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
    saveVideoOfQuadrant: builder.mutation({
      query: (args) => {
        // Destructuring Object
        const { quadrantNumber, projectId, userId, urlVideo } = args;

        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}/video`,
          method: "POST",
          body: {
            "quadrantNumber": quadrantNumber,
            "urlVideo": urlVideo
        },
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
    saveImageOfQuadrant: builder.mutation({
      query: (args) => {
        // Destructuring Object
        const { quadrantNumber, projectId, userId, imageBase64 } = args;

        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}/image`,
          method: "POST",
          body: {
            "quadrantNumber": quadrantNumber,
            "imageBase64": imageBase64
        },
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
    saveWebOfQuadrant: builder.mutation({
      query: (args) => {
        // Destructuring Object
        const { quadrantNumber, projectId, userId, urlWeb } = args;

        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}/web`,
          method: "POST",
          body: {
            "quadrantNumber": quadrantNumber,
            "urlWeb": urlWeb
        },
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
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
    getWebOfQuadrant: builder.query({
      query: ({ userId, projectId, quadrantNumber }) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}/quadrants/${quadrantNumber}/web`,
          method: "GET",
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
    getGalleryOfQuadrant: builder.query({
      query: ({ userId, projectId, quadrantNumber }) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}/quadrants/${quadrantNumber}/imageGallery`,
          method: "GET",
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
    getVideoOfQuadrant: builder.query({
      query: ({ userId, projectId, quadrantNumber }) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}/quadrants/${quadrantNumber}/video`,
          method: "GET",
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
  }),
});

export const { useUpdateQuadrantMutation, useSaveVideoOfQuadrantMutation, useGetQuadrantQuery, useSaveImageOfQuadrantMutation, useSaveWebOfQuadrantMutation,useLazyGetGalleryOfQuadrantQuery, useLazyGetVideoOfQuadrantQuery, useLazyGetWebOfQuadrantQuery, useUpdateQuadrantItemMutation } = quadrantsApiSlice;
