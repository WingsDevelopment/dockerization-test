import RIconify from "../components/icon/RIconify";
import { TagRoutes } from "../features/Tag/routing";
import { NavConfigItem } from "../pages/App";

export const navConfig: NavConfigItem[] = [
  {
    name: "Home",
    icon: <RIconify icon="file-icons:test-rust" />,
    path: "/home",
  },
  {
    name: "Settings",
    icon: <RIconify icon="vscode-icons:file-type-light-testjs" />,
    path: "/settings",
  },
  {
    name: "Test",
    icon: <RIconify icon="fluent-emoji:test-tube" />,
    path: "/test",
  },
  {
    name: "Users",
    icon: <RIconify icon="vscode-icons:folder-type-vscode-test3" />,
    path: "/users",
  },
  {
    name: "Tags",
    icon: <RIconify icon="healthicons:intestinal-pain-negative" />,
    path: TagRoutes.index,
  },
  {
    name: "---------",
    icon: <RIconify icon="noto:test-tube" />,
    path: "/home12",
  },
  {
    name: "App",
    icon: <RIconify icon="noto:test-tube" />,
    path: "/home1",
  },
  {
    name: "E-Commerce",
    icon: <RIconify icon="healthicons:malaria-testing" />,
    path: "/test1",
  },
  {
    name: "Analytics",
    icon: <RIconify icon="healthicons:intestinal-pain-negative" />,
    path: "/users1",
  },
  {
    name: "Banking",
    icon: <RIconify icon="simple-icons:minetest" />,
    path: "/settings1",
  },

  {
    name: "Booking",
    icon: <RIconify icon="logos:testlodge" />,
    path: "/home2",
  },
  {
    name: "File",
    icon: <RIconify icon="logos:testcafe" />,
    path: "/test2",
  },
  {
    name: "User",
    icon: <RIconify icon="logos:user-testing-icon" />,
    path: "/users2",
  },
  {
    name: "E-Commerce",
    icon: <RIconify icon="vscode-icons:file-type-light-testjs" />,
    path: "/settings2",
  },
  {
    name: "Invoice",
    icon: <RIconify icon="fluent-emoji:test-tube" />,
    path: "/test3",
  },
  {
    name: "Blog",
    icon: <RIconify icon="vscode-icons:folder-type-vscode-test3" />,
    path: "/users3",
  },
  {
    name: "File Manager",
    icon: <RIconify icon="vscode-icons:file-type-light-testjs" />,
    path: "/settings3",
  },
  {
    name: "Blank",
    icon: <RIconify icon="file-icons:test-rust" />,
    path: "/home4",
  },
];
