import React, { PropsWithChildren } from "react";
import { Div } from "../wrappers/Div";

interface Props extends PropsWithChildren {
  className?: string;
  gap?: number;
}

export const RGridContainer: React.FC<Props> = ({
  gap,
  className,
  children,
}) => {
  return (
    <Div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: `${gap}rem`,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </Div>
  );
};
