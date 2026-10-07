import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "../pages/Register";
import Home from "../pages/Home";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Register/>
    },
    {
      path: "/home",
      element:<Home/>
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
