import React, { createContext, PropsWithChildren, useContext } from "react";

export type Theme =
  | "theme-blue"
  | "theme-dark-blue"
  | "theme-purple"
  | "theme-green"
  | "theme-red"
  | "theme-yellow";
interface ThemeContext {
  mode: "white-theme" | "dark-theme";
  setMode: (mode: "white-theme" | "dark-theme") => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isStrached: boolean;
  setIsStrached: (strach: boolean) => void;
  direction: "ltr" | "rtl";
  setDirection: (direction: "ltr" | "rtl") => void;
  contrast: boolean;
  setContrast: (contrast: boolean) => void;
}

export const ThemeContext = createContext<ThemeContext | null>({
  mode: "dark-theme",
  setMode: () => {},
  theme: "theme-blue",
  setTheme: () => {},
  isStrached: false,
  setIsStrached: () => {},
  direction: "ltr",
  setDirection: () => {},
  contrast: false,
  setContrast: () => {},
});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext context must be use inside ThemeProvider");

  return context;
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = React.useState<"white-theme" | "dark-theme">(
    "dark-theme"
  );
  const [theme, setTheme] = React.useState<Theme>("theme-green");
  const [isStrached, setIsStrached] = React.useState<boolean>(false);
  const [direction, setDirection] = React.useState<"ltr" | "rtl">("ltr");
  const [contrast, setContrast] = React.useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        theme,
        setTheme,
        isStrached,
        setIsStrached,
        direction,
        setDirection,
        contrast,
        setContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
