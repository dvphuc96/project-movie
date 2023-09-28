import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, MainLayout } from "components";
import { Home, Login, Register, MovieDetail, Account, Cinema, Purchase } from "pages";
import { AuthGuard } from "guards";

export const router: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.account,
        element: <Account />,
      },
      {
        path: PATH.movieDetail,
        element: <MovieDetail />,
      },
      {
        path: PATH.cinema,
        element: <Cinema />,
      },
      {
        path: PATH.purchase,
        element: (
          <AuthGuard>
            <Purchase />
          </AuthGuard>
        )
      },
    ],
  },
];
