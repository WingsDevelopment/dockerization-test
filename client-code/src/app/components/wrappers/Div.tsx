import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<{}> {
  className?: string;
  style?: React.CSSProperties;
}

export const Div: React.FC<Props> = ({ className, style, children }) => {
  return (
    <div className={className ? className : ""} style={style ? style : {}}>
      {children}
    </div>
  );
};
