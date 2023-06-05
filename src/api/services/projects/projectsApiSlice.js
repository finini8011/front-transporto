import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApiSlice = createApi({
  reducerPath: "projectsApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://b8kuuq9hd4.execute-api.us-east-1.amazonaws.com",
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
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getProjectTypeProduct: builder.query({
      query: (userId) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/test/users/${userId}/projectTypes/producto`,
          method: "GET",
        };
      },
      providesTags: ["Projects"],
      invalidatesTags: ["Projects"],
    }),
    getProjectTypeService: builder.query({
      query: (userId) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/test/users/${userId}/projectTypes/servicio`,
          method: "GET",
        };
      },
      providesTags: ["Projects"],
      invalidatesTags: ["Projects"],
    }),
    getProjects: builder.query({
      query: ({userId}) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/test/users/${userId}/projectTypes/all`,
          method: "GET",
        };
      },
      providesTags: ["Projects"],
      invalidatesTags: ["Projects"],
    }),
    getProject: builder.query({
      query: ({ userId, projectId }) => {
        // Destructuring Object
        return {
          // Returns url with multiple args
          url: `/test/users/${userId}/projects/${projectId}`,
          method: "GET",
        };
      },
      providesTags: ["Projects"],
      invalidatesTags: ["Projects"],
    }),
    updateProject: builder.mutation({
      query: (args) => {
        // Destructuring Object
        const { projectName, projectType, newLayoutType, projectId, userId, backgroundBase64, description, logoBase64, order } =
          args;
        return {
          // Returns url with multiple args
          url: `/test/users/${userId}/project/update`,
          method: "PUT",
          body: {
            projectName,
            projectType,
            layoutType: newLayoutType,
            projectId,
            order,
            backgroundBase64,
            description,
            logoBase64
          },
        };
      },
      providesTags: ["Projects"],
      invalidatesTags: ["Projects"],
    }),
    createProject: builder.mutation({
      query: (args) => {
        const { projectName, projectType, newLayoutType, userId, backgroundBase64, logoBase64, description } = args;
        return {
          // Returns url with multiple args
          url: `/test/users/${userId}`,
          method: "POST",
          body: {
            projectName,
            projectType,
            layoutType: newLayoutType,
            backgroundBase64,
            logoBase64,
            description
            // order: 0,
          },
        };
      },
      providesTags: ["Projects"],
      invalidatesTags: ["Projects"],
    }),
    deleteProject: builder.mutation({
      query: ({ projectId, userId }) => ({
        url: `/test/users/${userId}/projects`,
        method: "DELETE",
        body: {
          projectId: projectId,
        },
      }),
      providesTags: ["Projects"],
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetProjectTypeProductQuery,
  useGetProjectTypeServiceQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetProjectQuery,
  useGetProjectsQuery,
  // useLazyGetQuestProjectsQuery,
  useCreateProjectMutation,
} = projectsApiSlice;
