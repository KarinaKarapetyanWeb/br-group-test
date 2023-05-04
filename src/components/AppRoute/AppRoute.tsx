import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/not-found/not-found";
import Stories from "../../pages/stories/stories";
import Story from "../../pages/story/story";
import { AppRoutes } from "../../const";

interface AppRouteProps {}

const AppRoute: React.FunctionComponent<AppRouteProps> = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Stories} element={<Stories />} />
      <Route path={AppRoutes.Story} element={<Story />} />
      <Route path={AppRoutes.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
