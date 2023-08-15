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
    getStatePESV: builder.query({
      query: () => {
        return {
          url: `/steps/substates`,
          method: "GET",
        };
      },
        providesTags: ["Steps"],
        invalidatesTags: ["Steps"],
    }),
    getDataStep: builder.query({
      query: (numStep) => {
        // retorna true si el nit existe
        return {
          url: `steps/${numStep}/get_data`,
          method: "GET",
        };
      },
      providesTags: ["Steps"],
      providesTags: ["Steps"],
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
          payload: [
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
      providesTags: ["Steps"],
      invalidatesTags: ["Steps"],
    }),

    getStateList: builder.query({
      query: (nivel) => {
        return {
          url: `/steps/checklist`,
          method: "GET",
        };
      },
      providesTags: ["Steps"],
      invalidatesTags: ["Steps"],
    }),

    getDataStep5: builder.query({
      query: (numStep) => {
        // retorna true si el nit existe
        return {
          url: `steps/${numStep}/get_inventory`,
          method: "GET",
        };
      },
      providesTags: ["Steps"],
      providesTags: ["Steps"],
    }),
  }),
});
export const {
  useGetDataStepQuery,
  useSaveStepMutation,
  useSaveStepQuestionMutation,
  useGetStateStepsQuery,
  useGetStatePESVQuery,
  useGetStateListQuery,
  useLazyGetDataStepQuery,
  useLazyGetDataStep5Query,
} = stepsApiSlice;
