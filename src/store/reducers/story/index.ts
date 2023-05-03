import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../../const";
import { fetchComments, fetchFullStory, fetchInnerComments } from "./action";
import { StoryState } from "../../../types/state";

const initialState: StoryState = {
  story: null,
  comments: [],
  isStoryLoading: false,
  isStoryError: false,
  isCommentsLoading: false,
  isCommentsError: false,
  innerComments: [],
  isInnerCommentsLoading: false,
  isInnerCommentsError: false,
};

const reducer = createSlice({
  name: NameSpace.Story,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFullStory.pending, (state) => {
        state.isStoryLoading = true;
        state.isStoryError = false;
      })
      .addCase(fetchFullStory.fulfilled, (state, action) => {
        state.story = action.payload;
        state.isStoryLoading = false;
      })
      .addCase(fetchFullStory.rejected, (state) => {
        state.isStoryLoading = false;
        state.isStoryError = true;
      })
      .addCase(fetchComments.pending, (state) => {
        state.isCommentsLoading = true;
        state.isCommentsError = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isCommentsLoading = false;
        state.isCommentsError = true;
      })
      .addCase(fetchInnerComments.pending, (state) => {
        state.isInnerCommentsLoading = true;
        state.isInnerCommentsError = false;
      })
      .addCase(fetchInnerComments.fulfilled, (state, action) => {
        state.innerComments = action.payload;
        state.isInnerCommentsLoading = false;
      })
      .addCase(fetchInnerComments.rejected, (state) => {
        state.isInnerCommentsLoading = false;
        state.isInnerCommentsError = true;
      });
  },
});

export default reducer;
