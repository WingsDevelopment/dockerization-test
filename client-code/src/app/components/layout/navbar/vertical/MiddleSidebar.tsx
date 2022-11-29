import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { NavConfigItem } from "../../../../pages/App";
import { Div } from "../../../wrappers/Div";
import { NavItem } from "./NavItem";

interface Props extends PropsWithChildren<{}> {
  className?: string;
  navConfig: NavConfigItem[];
  isCollapsed: boolean;
}

export const MiddleSidebar: React.FC<Props> = ({ navConfig, isCollapsed }) => {
  return (
    <Div
      style={{
        flexGrow: 0,
        width: "100%",
      }}
    >
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {navConfig.map((item, index) => {
          return (
            <NavItem isCollapsed={isCollapsed} item={item} key={item.path} />
          );
        })}
      </ul>
    </Div>
  );
};
