import { Alert } from "antd";
import React from "react";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({ text }) => {
  return <Alert message={text} type="error" />;
};

export default ErrorMessage;
