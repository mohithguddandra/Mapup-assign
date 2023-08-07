import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Map from "./Map";
import "../App.css";

const { Header, Sider, Content, Footer } = Layout;

const Headerfooter = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  const handleProfile = () => {
    // Implement your profile navigation logic here
  };

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleSidebar,
            }
          )}
          <div className="header-right">
            <Button icon={<LogoutOutlined />} onClick={handleLogout}>
              Logout
            </Button>
            <Button icon={<UserOutlined />} onClick={handleProfile}>
              Profile
            </Button>
          </div>
        </Header>
        <Content className="content">
          <Map className="map-container" />
        </Content>
        <Footer className="footer"></Footer>
      </Layout>
    </Layout>
  );
};

export default Headerfooter;
