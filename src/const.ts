enum AppRoutes {
  Stories = "/",
  Story = "/stories/:id",
  NotFound = "*",
}

const BACKEND_URL = "https://hacker-news.firebaseio.com/v0";

const REQUEST_TIMEOUT = 10000;

const REFRESH_TIMEOUT = 60000;

const MAX_STORIES_COUNT = 100;

const MOCK_DATA_LENGTH = 10;

export {
  AppRoutes,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  REFRESH_TIMEOUT,
  MAX_STORIES_COUNT,
  MOCK_DATA_LENGTH,
};
