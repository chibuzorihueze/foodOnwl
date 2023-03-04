import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/hoc/ErrorBoundary";

const Home = lazy(() => import("../pages/website/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, element: <Home /> }],
    errorElement: <ErrorBoundary />,
    hasErrorBoundary: true,
  },
  {},
]);

export default router;
