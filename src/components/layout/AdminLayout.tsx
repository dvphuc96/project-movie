import { useState } from "react";
import {
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { MenuHamber } from "constant";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung";
import { useDispatch } from "react-redux";
import { RootDispatch } from "store";

const { Header, Sider, Content, Footer } = Layout;
export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useDispatch<RootDispatch>();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical relative flex items-center justify-center h-[60px]">
            <p className="font-700 text-20 text-white">
              <span className="text-[var(--primary-color)]">CYBER</span>
              MOVIE
            </p>
          </div>
          <MenuHamber/>
          <DivLogout>
            <button
              onClick={() => {
                dispatch(quanLyNguoiDungActions.logOut("logOut"));
              }}
            >
              <LoginOutlined />
              <span>Logout</span>
            </button>
          </DivLogout>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Movie Design ©2023 Created dvphuc
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

const DivLogout = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 200px;
  height: 48px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  background: #002140;
  cursor: pointer;
  transition: all 0.2s;
  button {
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    height: 40px;
    line-height: 40px;
    padding-inline: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-inline: 4px;
    margin-block: 4px;
    padding-left: 24px;
    width: calc(100% - 8px);
    border-radius: 8px;
    span {
      &:last-child {
        margin-left: 10px;
      }
    }
  }
`;
