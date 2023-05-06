import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Story, StoriesIds } from "../types/story";
import { BACKEND_URL, REQUEST_TIMEOUT } from "../const";
import { Comment } from "../types/comment";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  }),
  endpoints: (builder) => ({
    getAllStories: builder.query<StoriesIds, number>({
      query: (limit) =>
        `/newstories.json?print=pretty&limitToFirst=${limit}&orderBy=%22$key%22`,
    }),
    getStory: builder.query<Partial<Story>, number>({
      query: (id) => `item/${id}.json?print=pretty`,
    }),
    getComment: builder.query<Partial<Comment>, number>({
      query: (id) => `item/${id}.json?print=pretty`,
    }),
  }),
});

export const { useGetStoryQuery, useGetCommentQuery, useGetAllStoriesQuery } =
  newsApi;
