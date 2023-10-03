import {
  DatabaseOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
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
export const menuHeader: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export const sideBar: MenuItem[] = [
  getItem("User", "1", <UserOutlined />),
  getItem("Film", "sub1", <DatabaseOutlined />, [
    getItem("Film List", "2"),
    getItem("Add Film", "3"),
    getItem("Edit Film", "4"),
  ]),
  getItem("Showtime", "sub2", <FieldTimeOutlined />, [
    getItem("Add showtime", "5"),
  ]),
];
