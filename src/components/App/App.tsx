import React from "react";
import { Layout } from "antd";
import AppRoute from "../AppRoute/AppRoute";
import styles from "./App.module.scss";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <div className="container">
          <p className={styles.logo}>Hacker News</p>
        </div>
      </Header>
      <Content className={styles.content}>
        <AppRoute />
      </Content>
      <Footer className={styles.footer}>Hacker News ©2023</Footer>
    </Layout>
  );
}

export default App;
