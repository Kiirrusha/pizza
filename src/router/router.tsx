import { createBrowserRouter } from "react-router-dom";
import { Menu } from "../pages/Menu/Menu";
import { Card } from "../pages/Card/Card";
import { Layout } from "../layout/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Card />,
      },
    ],
  },
]);
