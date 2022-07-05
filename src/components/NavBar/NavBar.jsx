import styles from "./NavBar.module.css";

import { Layout, Menu, Typography, Avatar } from "antd";
import React from "react";
const { Header } = Layout;
const { Text } = Typography;

const items1 = [
  {
    key: "1",
    label: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    title: "hello fucker",
    children: [
      {
        key: "2",
        label: "Log Out",
      },
    ],
  },
];

function NavBar() {
  return (
    <Header>
      <Text className={styles.logo}>Assignment</Text>
      <Menu
        className={styles.avatar}
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
  );
}

export default NavBar;
