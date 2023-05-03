import { store } from "../store/index.js";
import { Comments } from "./comment.js";
import { Stories } from "./stories.js";
import { Story } from "./story.js";

export type StoryState = {
  story: Story | null;
  comments: Comments;
  isStoryLoading: boolean;
  isStoryError: boolean;
  isCommentsLoading: boolean;
  isCommentsError: boolean;
  innerComments: Comments;
  isInnerCommentsLoading: boolean;
  isInnerCommentsError: boolean;
};

export type StoriesState = {
  stories: Stories;
  isStoriesLoading: boolean;
  isStoriesError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
