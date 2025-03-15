import React, { useState } from "react";
import { Layout, Menu, Avatar, Breadcrumb, Button } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import logo from "../../assets/Acculer-Logo/logo.jpg";

const { Header, Sider, Content, Footer } = Layout;

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: "home", icon: <DashboardOutlined />, label: "Home", path: "/home" },
    { key: "about", icon: <AppstoreOutlined />, label: "About", path: "/about" },
    { key: "prediction", icon: <UserOutlined />, label: "Prediction", path: "/prediction" },
    { key: "team", icon: <AppstoreOutlined />, label: "Team", path: "/team" },
    { key: "contact", icon: <SettingOutlined />, label: "Contact", path: "/contact" },
  ];

  const selectedKey = menuItems.find((item) => item.path === location.pathname)?.key || "home";

  const handleMenuClick = ({ key }) => {
    const selectedItem = menuItems.find((item) => item.key === key);
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  const breadcrumbs = location.pathname
    .split("/")
    .filter((part) => part)
    .map((part, index, arr) => ({
      path: `/${arr.slice(0, index + 1).join("/")}`,
      label: part.charAt(0).toUpperCase() + part.slice(1),
    }));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={250}
        style={{
          background: "#fff",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          transition: "all 0.3s",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", padding: "16px" }}>
          <img
            src={logo}
            alt="CRM Logo"
            style={{ width: collapsed ? "50px" : "150px", transition: "width 0.3s" }}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
          }))}
        />
      </Sider>

      {/* Main Layout */}
      <Layout style={{ marginLeft: collapsed ? 80 : 250, transition: "margin-left 0.3s" }}>
        {/* Header */}
        <Header
          style={{
            position: "fixed",
            width: `calc(100% - ${collapsed ? 80 : 250}px)`,
            top: 0,
            zIndex: 1000,
            padding: "0 16px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "width 0.3s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Breadcrumb
              items={[
                { title: "Home", path: "/" },
                ...breadcrumbs.map((breadcrumb) => ({
                  title: breadcrumb.label,
                  path: breadcrumb.path,
                  onClick: () => navigate(breadcrumb.path),
                })),
              ]}
            />
          </div>

          <Avatar src="https://your-image-url.com/avatar.png" />
        </Header>

        {/* Content */}
        <Content style={{ marginTop: 64, padding: 24, minHeight: "calc(100vh - 112px)" }}>
          <Outlet />
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          Chronic Kidney Disease Prediction
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
