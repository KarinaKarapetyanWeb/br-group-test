import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { newsApi } from "../services/newsApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});
