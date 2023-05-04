import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";
import { Typography } from "antd";

const { Title } = Typography;

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = () => {
  return (
    <div className="container">
      <Title level={2}>Page not found</Title>
      <Link to={AppRoutes.Stories}>Go to main</Link>
    </div>
  );
};

export default NotFound;
