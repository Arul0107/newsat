import React, { useState, useEffect } from "react";
import { Layout, Menu, Avatar, Breadcrumb, Button, Tooltip, Drawer } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuOutlined
} from "@ant-design/icons";
import logo from "../../assets/Acculer-Logo/logo.jpg";

const { Header, Sider, Content, Footer } = Layout;

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  
  const menuItems = [
    { key: "home", icon: <DashboardOutlined />, label: "Home", path: "/home" },
    { key: "about", icon: <AppstoreOutlined />, label: "About", path: "/about" },
    { key: "prediction", icon: <UserOutlined />, label: "Prediction", path: "/prediction" },
    { key: "team", icon: <AppstoreOutlined />, label: "Detail Output", path: "/team" },
    { key: "contact", icon: <SettingOutlined />, label: "Contact", path: "/contact" },
  ];

  const selectedKey = menuItems.find((item) => item.path === location.pathname)?.key || "home";


  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true);
      }
    };

   
    checkScreenSize();

   
    window.addEventListener("resize", checkScreenSize);

    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleMenuClick = ({ key }) => {
    const selectedItem = menuItems.find((item) => item.key === key);
    if (selectedItem) {
      navigate(selectedItem.path);
      if (isMobile) {
        setDrawerVisible(false);
      }
    }
  };

  const breadcrumbs = location.pathname
    .split("/")
    .filter((part) => part)
    .map((part, index, arr) => ({
      path: `/${arr.slice(0, index + 1).join("/")}`,
      label: part.charAt(0).toUpperCase() + part.slice(1),
    }));

  const renderMenu = () => (
    <Menu 
      theme="light" 
      mode="inline" 
      selectedKeys={[selectedKey]} 
      onClick={handleMenuClick}
      style={{ border: "none" }}
    >
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <span>{item.label}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
     
      {!isMobile && (
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
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 1001
          }}
          trigger={null}
        >
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            padding: "16px",
            borderBottom: "1px solid #f0f0f0" 
          }}>
            <img
              src={logo}
              alt="CRM Logo"
              style={{ 
                width: collapsed ? "40px" : "80px", 
                height: collapsed ? "40px" : "auto",
                transition: "width 0.3s",
                objectFit: "contain"
              }}
            />
          </div>
          {renderMenu()}
        </Sider>
      )}

    
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Logo" style={{ height: "30px", marginRight: "10px" }} />
            <span>CKD Prediction</span>
          </div>
        }
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
        width={250}
      >
        {renderMenu()}
      </Drawer>


      <Layout style={{ 
        marginLeft: isMobile ? 0 : (collapsed ? 80 : 250), 
        transition: "margin-left 0.3s" 
      }}>
    
        <Header
          style={{
            position: "fixed",
            width: isMobile ? "100%" : `calc(100% - ${collapsed ? 80 : 250}px)`,
            top: 0,
            zIndex: 1000,
            padding: "0 16px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "width 0.3s",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {isMobile ? (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerVisible(true)}
              />
            ) : (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
            
            <Breadcrumb style={{ 
              display: isMobile ? "none" : "flex",
              alignItems: "center" 
            }}>
              <Breadcrumb.Item>
                <span 
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </span>
              </Breadcrumb.Item>
              {breadcrumbs.map((breadcrumb) => (
                <Breadcrumb.Item key={breadcrumb.path}>
                  <span 
                    onClick={() => navigate(breadcrumb.path)}
                    style={{ cursor: "pointer" }}
                  >
                    {breadcrumb.label}
                  </span>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <span style={{ marginRight: "15px", fontWeight: "500" }}>
                {breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1].label : "Home"}
              </span>
            )}
            <Avatar src={logo} size={isMobile ? "small" : "default"} />
          </div>
        </Header>

       
        <Content style={{ 
          marginTop: 64, 
          padding: isMobile ? 12 : 24, 
          minHeight: "calc(100vh - 112px)",
          overflow: "auto"
        }}>
          <Outlet />
        </Content>

    
        <Footer style={{ 
          textAlign: "center",
          padding: isMobile ? "10px" : "20px",
          fontSize: isMobile ? "12px" : "14px"
        }}>
          Chronic Kidney Disease Prediction
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;