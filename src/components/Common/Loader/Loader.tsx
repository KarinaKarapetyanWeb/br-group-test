import React from "react";
import styles from "./Loader.module.scss";
import { Spin } from "antd";

interface LoaderProps {}

const Loader: React.FunctionComponent<LoaderProps> = () => {
  return (
    <div className={styles.loader}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
