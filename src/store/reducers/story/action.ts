import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ApiRoute } from "../../../const";
import { Story } from "../../../types/story";
import { AppDispatch, State } from "../../../types/state";
import { CommentIds, Comments, Comment } from "../../../types/comment";
import { Result, Results } from "../../../types/result";

export const fetchStory = createAsyncThunk<
  Story,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("story/fetchStory", async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Story>(`${ApiRoute.Story}/${id}.json`);
  return data;
});

export const fetchFullStory = createAsyncThunk<
  Story,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("story/fetchFullStory", async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Story>(`${ApiRoute.Story}/${id}.json`);
  return data;
});

export const fetchComment = createAsyncThunk<
  Comment,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("story/fetchComment", async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Comment>(`${ApiRoute.Story}/${id}.json`);
  return data;
});

export const fetchComments = createAsyncThunk<
  Comments,
  CommentIds,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("story/fetchComments", async (ids, { dispatch, extra: api }) => {
  const results = (await Promise.all(
    ids.map((id: number) => dispatch(fetchComment(id)))
  )) as Results<Comment>;
  const comments = results.map((result: Result<Comment>) => result.payload);
  return comments;
});
