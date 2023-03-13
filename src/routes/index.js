import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/hoc/ErrorBoundary";

const Home = lazy(() => import("../pages/website/Home"));
const Menu = lazy(() => import("../pages/website/Home/Menu"));
const Login =lazy(() => import("../pages/website/Home/Login"));
const Verify = lazy(() => import("../pages/website/Home/Verify"));
const SignIn = lazy(() => import("../pages/website/Home/SignIn"));
const NotFound = lazy(() => import("../pages/NotFound"));


const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, element: <Home /> }],
    errorElement: <ErrorBoundary />,
    hasErrorBoundary: true,
  },
  {
  path: "/menu",
  children: [{index: true, element:<Menu />  }],
  errorElement: <ErrorBoundary />,
  hasErrorBoundary: true,
},
{
  path: "/login",
  children: [{index: true, element:<Login/>  }],
  errorElement: <ErrorBoundary />,
  hasErrorBoundary: true,
},
{
  path: "/verify",
  children: [{index: true, element:<Verify/>  }],
  errorElement: <ErrorBoundary />,
  hasErrorBoundary: true,
},
{
  path: "/signin",
  children: [{index: true, element:<SignIn/>  }],
  errorElement: <ErrorBoundary />,
  hasErrorBoundary: true,
},
  { path: "*", element: <NotFound /> },
]);

export default router;