import React, { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header
      style={{
        display: "flex",
        boxShadow: "0 1px 10px 0 rgba(0,0,0,0.2)",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        columnGap: "0.5rem",
      }}
    >
      {children}
    </header>
  );
};
