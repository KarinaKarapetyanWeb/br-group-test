import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import Stories from "./reducers/stories";
import Story from "./reducers/story";

export const rootReducer = combineReducers({
  [NameSpace.Stories]: Stories.reducer,
  [NameSpace.Story]: Story.reducer,
});
