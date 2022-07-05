import { CheckSquareOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

function SideBar(props) {
  const items = [
    {
      key: 1,
      icon: <AppstoreOutlined />,
      label: "Overview",
    },
  ];
  props.behaviours.forEach((element, index) => {
    items.push({
      key: index + 2,
      icon: <CheckSquareOutlined />,
      label: element.table_description,
    });
  });
  // console.log(items);
  return (
    <Sider
      collapsedWidth={0}
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <Menu
        onClick={(menu) => {
          props.setBehaviour(menu.keyPath[0]);
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
}

export default SideBar;
