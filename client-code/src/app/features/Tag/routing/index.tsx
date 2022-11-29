import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const CreateTagPage = lazy(() => import("../pages/Create/CreateTagPage"));
const UpdateTagPage = lazy(() => import("../pages/Update/UpdateTagPage"));
const TagDetailsPage = lazy(() => import("../pages/Details/DetailsTagPage"));
const TagIndexPage = lazy(() => import("../pages/Index/IndexTagPage"));

const TagRoot = `/Tag`;
export const TagRoutes = {
  root: TagRoot,
  create: `${TagRoot}/create`,
  update: `${TagRoot}/update`,
  details: `${TagRoot}/details`,
  index: `${TagRoot}/index`,
};

export const TagRouteObject: RouteObject = {
  path: TagRoutes.root,
  children: [
    { path: TagRoutes.create, element: <CreateTagPage /> },
    { path: TagRoutes.details + "/:id", element: <TagDetailsPage /> },
    { path: TagRoutes.index, element: <TagIndexPage /> },
    { path: TagRoutes.update + "/:id", element: <UpdateTagPage /> },
  ],
};
