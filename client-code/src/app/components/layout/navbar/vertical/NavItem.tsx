import React from "react";
import { useNavigate } from "react-router-dom";
import useActiveRoute from "../../../../hooks/useActiveRoute";
import { NavConfigItem } from "../../../../pages/App";
import { Div } from "../../../wrappers/Div";

interface Props {
  isCollapsed: boolean;
  item: NavConfigItem;
}

export const NavItem: React.FC<Props> = ({ isCollapsed, item }) => {
  const { active } = useActiveRoute(item.path);

  const navigate = useNavigate();
  return (
    <li
      className={`nav-item ${active ? "active" : ""}`}
      style={{
        width: "100%",
      }}
      onClick={() => navigate(item.path)}
    >
      <Div
        style={{
          cursor: "pointer",
          borderRadius: "0.5rem",
          display: "flex",
          width: "100%",
          paddingLeft: "1.25rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        {item.icon && item.icon}
        {!isCollapsed && <span>{item.name}</span>}
      </Div>
    </li>
  );
};
