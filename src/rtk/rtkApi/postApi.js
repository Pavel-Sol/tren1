/* eslint-disable no-shadow */
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi } from "@reduxjs/toolkit/query/react";
import { AsyncSlices } from "./../constants";

export const { reducerPath, id, type } = AsyncSlices.post;

export const postApi = createApi({
  reducerPath,
  tagTypes: [type],

  endpoints: (build) => ({
    getPosts: build.query({
      // TODO: в query методе использовать axios запросы
      query: () => "posts",
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type, id })), { type, id }] : [{ type, id }],
    }),
    addPost: build.mutation({
      query(body) {
        return {
          url: "post",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type, id }],
    }),
    getPost: build.query({
      query: (id) => `post/${id}`,
      providesTags: (result, error, id) => [{ type, id }],
    }),
    updatePost: build.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `post/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type, id }],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `post/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type, id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
