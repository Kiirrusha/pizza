import { createBrowserRouter, defer } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Cart } from "../pages/Card/Cart";
import { Product } from "../pages/Product/Product";
import { PREFIX } from "../helpers/API";
import axios from "axios";
import { Suspense, lazy } from "react";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { AuthLayout } from "../layout/Auth/AuthLayout";
import { RequireAuth } from "../helpers/RequireAuth";
import { Success } from "../pages/Success/Success";

const Menu = lazy(() => import("../pages/Menu/Menu"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>...загрузка</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          return defer({
            data: axios
              .get(`${PREFIX}/products/${params.id}`)
              .then((data) => data),
          });
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registartion",
        element: <Register />,
      },
    ],
  },
]);
