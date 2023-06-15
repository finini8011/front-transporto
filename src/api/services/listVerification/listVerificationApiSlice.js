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
    getListVerificationPdf: builder.query({
      query: () => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/get_listaverificacion`,
          method: "GET",
          responseHandler: async (response) => {
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = "LISTADEVERIFICACION.pdf";
            link.dispatchEvent(
              new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window,
              })
            );
            setTimeout(() => {
              // For Firefox it is necessary to delay revoking the ObjectURL
              window.URL.revokeObjectURL(downloadUrl);
              link.remove();
            }, 100);
          },
          cache: "no-cache",
        };
      },
      providesTags: ["ListVerification"],
      invalidatesTags: ["ListVerification"],
    }),
    saveListVerification: builder.mutation({
      query: (args) => {
        // Destructuring Object

        const data = {
          payload: args,
        };

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
        const {
          quadrantNumber,
          projectId,
          userId,
          url,
          quadrantItemType,
          quadrantItemId,
        } = args;

        return {
          // Returns url with multiple args
          url: `${urlFiles}/test/users/${userId}/projects/${projectId}`,
          method: "PUT",
          body: {
            quadrantNumber: quadrantNumber,
            quadrantItemType,
            url: url,
            quadrantItemId,
          },
        };
      },
      providesTags: ["Quadrants"],
      invalidatesTags: ["Quadrants"],
    }),
  }),
});

export const {
  useLazyGetListVerificationPdfQuery,
  useSaveListVerificationMutation,
  useUpdateQuadrantItemMutation,
} = listVerificationApiSlice;
