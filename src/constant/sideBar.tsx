import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

export const sideBar: ItemType<MenuItemType>[] = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "nav 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
  },
];
