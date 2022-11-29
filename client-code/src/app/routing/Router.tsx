import { ElementType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { TagRouteObject } from "../features/Tag/routing";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "",
      children: [
        { path: "home", element: <Home /> },
        { path: "test", element: <TestPage /> },
        { path: "users", element: <Users /> },
        { path: "settings", element: <Settings /> },
      ],
    },
    { ...TagRouteObject },
  ]);
}

const Home = lazy(() => import("../pages/Home"));
const TestPage = lazy(() => import("../pages/TestPage"));
const Settings = lazy(() => import("../pages/Settings"));
const Users = lazy(() => import("../pages/Users"));
