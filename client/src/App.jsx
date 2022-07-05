import "./App.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Behaviours from "./components/Behaviours/Behaviours";
import TodoContainer from "./components/TodoContainer/TodoContainer";
const { Header, Content } = Layout;

const App = () => {
  const [behaviours, setBehaviours] = useState([]);
  const [selectedBehaviour, setBehaviour] = useState("1");
  useEffect(() => {
    axios("https://eubrics-todo-assignment.herokuapp.com/behaviours").then(
      (data) => {
        setBehaviours(data.data);
      }
    );
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <NavBar />
      <Layout>
        <SideBar
          setBehaviour={setBehaviour}
          behaviours={behaviours}
          collapsed={collapsed}
        />
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {selectedBehaviour === "1" ? (
              <Behaviours setBehaviour={setBehaviour} behaviours={behaviours} />
            ) : (
              <TodoContainer behaviour={behaviours[selectedBehaviour - 2]} />
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
