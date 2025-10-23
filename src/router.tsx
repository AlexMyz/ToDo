import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList"
import { ToD0ListPage } from "./pages/ToD0ListPage"
import { ViewListItem } from "./pages/ViewListItem"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <ToD0ListPage />,
        },
        {
          path: "/list",
          element: <ViewList />,
        },
        {
          path: "/list/:id",
          element: <ViewListItem  />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]
  // { basename: "/ToDo/" }
)
