import { Action, ThunkAction } from "@reduxjs/toolkit";
import { store } from "../store/index.js";
import { Comments } from "./comment.js";
import { Story, StoriesIds } from "./story.js";

export type StoryState = {
  story: Partial<Story> | null;
  comments: Partial<Comments>;
  isStoryLoading: boolean;
  isStoryError: boolean;
  isCommentsLoading: boolean;
  isCommentsError: boolean;
};

export type StoriesState = {
  storiesIds: StoriesIds;
  isStoriesLoading: boolean;
  isStoriesError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  Action<string>
>;
