import React, { FC } from "react";
import MovieList from "../../components/MovieList";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import "./index.css";

const Main: FC = () => {
  const { Sider, Content } = Layout;
  return (
    <Layout>
      <Sider width="240">
        <Sidebar />
      </Sider>
      <Content className="content">
        <MovieList />
      </Content>
    </Layout>
  );
};

export default Main;
