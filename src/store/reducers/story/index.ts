import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../../const";
import { fetchComments, fetchFullStory } from "./action";
import { StoryState } from "../../../types/state";

const initialState: StoryState = {
  story: null,
  comments: [],
  isStoryLoading: false,
  isStoryError: false,
  isCommentsLoading: false,
  isCommentsError: false,
};

const reducer = createSlice({
  name: NameSpace.Story,
  initialState,
  reducers: {
    resetComments: (state) => {
      state.comments = [];
    },
  },
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
      });
  },
});

export default reducer;
