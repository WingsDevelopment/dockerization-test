import React, { PropsWithChildren } from "react";
import { NavConfigItem } from "../../../../pages/App";
import { BottomSidebar } from "./BottomSidebar";
import { Div } from "../../../wrappers/Div";
import { RImage } from "../../../image/RImage";
import { MiddleSidebar } from "./MiddleSidebar";
import { TopSidebar } from "./TopSidebar";

interface Props extends PropsWithChildren<{}> {
  isCollapsed: boolean;
  navConfig: NavConfigItem[];
}

export const Sidebar: React.FC<Props> = ({ isCollapsed, navConfig }) => {
  return (
    <aside
      style={{
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        alignItems: "center",
        width: isCollapsed ? "4rem" : "12rem",
      }}
    >
      <TopSidebar>
        <RImage
          src="/vite.svg"
          alt="placeholder"
          style={{
            width: "4rem",
            height: "4rem",
          }}
        />
        <Div
          style={{
            display: `${isCollapsed ? "none" : "block"}`,
          }}
        >
          Welcome back <span>Srdjan</span>
        </Div>
      </TopSidebar>
      <MiddleSidebar isCollapsed={isCollapsed} navConfig={navConfig} />
      <BottomSidebar>Documentation here</BottomSidebar>
    </aside>
  );
};
