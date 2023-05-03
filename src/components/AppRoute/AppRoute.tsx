import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import Stories from "../../pages/Stories/Stories";
import Story from "../../pages/Story/Story";
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
