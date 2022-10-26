import React, { useState } from "react";
import { Divider, Menu, Switch } from "antd";
import { MailOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [getItem("Home", "1", <MailOutlined />)];

const LeftMenu = () => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");

  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};

export default LeftMenu;
