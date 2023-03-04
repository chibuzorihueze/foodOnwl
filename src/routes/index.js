import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/website/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, element: <Home /> }],
  },
  {},
]);

export default router;
