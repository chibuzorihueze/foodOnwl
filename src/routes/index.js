import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/hoc/ErrorBoundary";

const Home = lazy(() => import("../pages/website/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, element: <Home /> }],
    errorElement: <ErrorBoundary />,
    hasErrorBoundary: true,
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
