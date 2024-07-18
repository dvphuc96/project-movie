import React from "react";
import {
  DatabaseOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { PATH } from "./config";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("User", "1", <UserOutlined />),
  getItem("Film", "sub1", <DatabaseOutlined />, [
    getItem(
      <div>
        <NavLink to={PATH.film}>Film List</NavLink>
      </div>,
      "2"
    ),
    getItem(
      <div>
        <NavLink to={PATH.createFilm}>Add Film</NavLink>
      </div>,
      "3"
    ),
  ]),
  getItem("Showtime", "sub2", <FieldTimeOutlined />, [
    getItem("Add showtime", "4"),
  ]),
];

export const MenuHamber: React.FC = () => {
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[location.pathname]}
      items={items}
    />
  );
};