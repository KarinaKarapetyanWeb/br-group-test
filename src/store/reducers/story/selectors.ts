import { NameSpace } from "../../../const";
import { Comments } from "../../../types/comment";
import { State } from "../../../types/state";
import { Story } from "../../../types/story";

export const getStory = (state: State): Story | null =>
  state[NameSpace.Story].story;

export const getStoryLoading = (state: State): boolean =>
  state[NameSpace.Story].isStoryLoading;

export const getStoryError = (state: State): boolean =>
  state[NameSpace.Story].isStoryError;

export const getComments = (state: State): Comments =>
  state[NameSpace.Story].comments;

export const getCommentsLoading = (state: State): boolean =>
  state[NameSpace.Story].isCommentsLoading;

export const getCommentsError = (state: State): boolean =>
  state[NameSpace.Story].isCommentsError;

export const getInnerComments = (state: State): Comments =>
  state[NameSpace.Story].innerComments;

export const getInnerCommentsLoading = (state: State): boolean =>
  state[NameSpace.Story].isInnerCommentsLoading;

export const getInnerCommentsError = (state: State): boolean =>
  state[NameSpace.Story].isInnerCommentsError;
