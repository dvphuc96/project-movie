/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, Loading, MainLayout } from "components";
import {
  Home,
  Login,
  Register,
  MovieDetail,
  Account,
  Cinema,
  Purchase,
  FilmList,
  FilmCreate,
  FilmUpdate,
} from "pages";
import { AdminGuard, AuthGuard } from "guards";
const AdminLayout: React.LazyExoticComponent<() => JSX.Element> = lazy(() =>
  import("../components").then(({ AdminLayout }) => ({ default: AdminLayout }))
);
export const router: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Loading />}>
        <AuthLayout />
      </Suspense>
    ),
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
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminGuard>
        <AdminLayout />
      </AdminGuard>
    ),
    children: [
      {
        index: true,
      },
      {
        children: [
          {
            path: PATH.film,
            element: <FilmList />,
          },
          {
            path: PATH.createFilm,
            element: <FilmCreate />,
          },
          {
            path: PATH.updateFilm,
            element: <FilmUpdate />,
          },
        ],
      },
    ],
  },
];
