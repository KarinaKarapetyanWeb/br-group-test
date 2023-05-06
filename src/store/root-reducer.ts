import { combineReducers } from "@reduxjs/toolkit";
import { newsApi } from "../services/newsApi";

export const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
});
