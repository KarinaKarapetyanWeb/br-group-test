import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../../const";
import { fetchStories } from "./action";
import { StoriesState } from "../../../types/state";
import { Stories } from "../../../types/stories";

const initialState: StoriesState = {
  stories: [] as Stories,
  isStoriesLoading: false,
  isStoriesError: false,
};

const reducer = createSlice({
  name: NameSpace.Stories,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.isStoriesLoading = true;
        state.isStoriesError = false;
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.stories = action.payload;
        state.isStoriesLoading = false;
      })
      .addCase(fetchStories.rejected, (state) => {
        state.isStoriesLoading = false;
        state.isStoriesError = true;
      });
  },
});

export default reducer;
