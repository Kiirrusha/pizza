import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Cart } from "../pages/Card/Cart";
import { Product } from "../pages/Product/Product";
import { PREFIX } from "../helpers/API";
import axios from "axios";
import { lazy } from "react";

const Menu = lazy(() => import("../pages/Menu/Menu"));

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
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        },
      },
    ],
  },
]);
