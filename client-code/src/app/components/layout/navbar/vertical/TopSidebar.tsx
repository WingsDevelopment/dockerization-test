import React, { PropsWithChildren } from "react";

export const TopSidebar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </div>
  );
};
