import { NameSpace } from "../../../const";
import { State } from "../../../types/state";
import { Stories } from "../../../types/stories";

export const getStories = (state: State): Stories =>
  state[NameSpace.Stories].stories;

export const getStoriesLoading = (state: State): boolean =>
  state[NameSpace.Stories].isStoriesLoading;

export const getStoriesError = (state: State): boolean =>
  state[NameSpace.Stories].isStoriesError;
