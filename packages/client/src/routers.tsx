import { lazy } from "react";
import { RouteObject } from "react-router";
const LoginPage = lazy(() => import("./pages/login"));

const routers: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default routers;
