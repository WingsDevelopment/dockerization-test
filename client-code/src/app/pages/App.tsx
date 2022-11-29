import { lazy, Suspense, useState } from "react";
import { RContainer } from "../components/wrappers/RContainer";
import { RContent } from "../components/wrappers/RContent";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/navbar/vertical/Sidebar";
import { useThemeContext } from "../providers/ThemeProvider";
import { RButton } from "../components/button/RButton";
import { navConfig } from "../routing/navConfig";
import Router from "../routing/Router";
// import Home from "../Home";
// import Settings from "../Settings";
// import TestPage from "../TestPage";
// import Users from "../Users";

export interface NavConfigItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  active?: boolean;
}

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { mode, setMode, theme, setTheme, isStrached, setIsStrached } =
    useThemeContext();

  return (
    <div className={`theme ${mode} ${theme}`}>
      <Header>
        <RButton onClick={() => setIsCollapsed(!isCollapsed)}>TT</RButton>
        <RButton
          onClick={() =>
            setMode(mode === "white-theme" ? "dark-theme" : "white-theme")
          }
        >
          mode
        </RButton>
        <RButton onClick={() => setIsStrached(!isStrached)}>Stratch</RButton>
        <RButton onClick={() => setTheme("theme-blue")}>Blue</RButton>
        <RButton onClick={() => setTheme("theme-dark-blue")}>Dark blue</RButton>
        <RButton onClick={() => setTheme("theme-purple")}>Purple</RButton>
        <RButton onClick={() => setTheme("theme-green")}>Green</RButton>
        <RButton onClick={() => setTheme("theme-red")}>Red</RButton>
        <RButton onClick={() => setTheme("theme-yellow")}>Yellow</RButton>
      </Header>
      <RContainer>
        <Sidebar isCollapsed={isCollapsed} navConfig={navConfig} />
        <Suspense fallback={<div>loading. . .</div>}>
          <Router />
        </Suspense>
      </RContainer>
    </div>
  );
}

export default App;
