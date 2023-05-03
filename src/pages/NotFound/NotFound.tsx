import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = () => {
  return (
    <div className="container">
      <h2>Page not found</h2>
      <Link to={AppRoutes.Stories}>Go to main</Link>
    </div>
  );
};

export default NotFound;
