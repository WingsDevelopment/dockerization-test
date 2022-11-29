import React, { PropsWithChildren } from "react";
import { useThemeContext } from "../../providers/ThemeProvider";
import { RContent } from "../wrappers/RContent";

export const RPageContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isStrached } = useThemeContext();

  return <RContent isStrached={isStrached}>{children}</RContent>;
};
