import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import ConfigRoutes from "../Config/Routes";

const { Header, Content, Sider } = Layout;

const AppRoutes = () => (
  <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          className="logo"
          style={{
            color: "white",
            textAlign: "center",
            padding: "16px",
            fontSize: "20px",
          }}
        >
          My App
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          {ConfigRoutes.map((route, index) => (
            <Menu.Item key={index} icon={route.icon}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              {ConfigRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  </Router>
);

export default AppRoutes;
