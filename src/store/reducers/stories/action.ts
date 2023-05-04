import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { ApiRoute, BACKEND_URL, MAX_STORIES_COUNT } from "../../../const";
import { Stories, StoriesIds } from "../../../types/stories";
import { AppDispatch, State } from "../../../types/state";
import { fetchStory } from "../story/action";
import { Result, Results } from "../../../types/result";
import { Story } from "../../../types/story";

export const fetchStories = createAsyncThunk<
  Stories,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("stories/fetchStories", async (_arg, { dispatch, extra: api }) => {
  const { data: storyIds } = await api.get<StoriesIds>(ApiRoute.Stories);
  const results = (await Promise.all(
    storyIds
      .slice(0, MAX_STORIES_COUNT)
      .map(async (id: number) => await dispatch(fetchStory(id)))
  )) as Results<Story>;
  const stories = results.map((result: Result<Story>) => result.payload);
  return stories;
});
