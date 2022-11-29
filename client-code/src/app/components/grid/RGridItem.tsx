import React, { PropsWithChildren } from "react";
import { Div } from "../wrappers/Div";

interface Props extends PropsWithChildren {
  sx?: number | undefined;
  sm?: number | undefined;
  md?: number | undefined;
  lg?: number | undefined;
  xl?: number | undefined;
}

export const RGridItem: React.FC<Props> = ({
  sx,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  return (
    <Div
      className={`col-xs-${sx ? sx : 12} col-sm-${
        sm ? sm : sx ? sx : 12
      } col-md-${md ? md : sm ? sm : sx ? sx : 12} col-lg-${
        lg ? lg : md ? md : sm ? sm : sx ? sx : 12
      } col-xl-${xl ? xl : lg ? lg : md ? md : sm ? sm : sx ? sx : 12}`}
    >
      {children}
    </Div>
  );
};
