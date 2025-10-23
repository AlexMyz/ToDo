import React from "react"
import ReactDOM from "react-dom/client"
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { ToDoList } from "./pages/ToD0List"
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Header } from "./components/Header/Header"
import { todo } from "./models/todo-item"
import { NotFound } from "./pages/404"
import { ItemDescription } from "./pages/ItemDescription"
import { Layout } from "./layouts/Layout"
import { HelmetProvider } from "react-helmet-async"

const todos: todo[] = [
  {
    id: 0,
    text: "First task",
    isDone: false,
  },
  {
    id: 2,
    text: "Second task",
    isDone: false,
  },
  {
    id: 3,
    text: "Third task",
    isDone: true,
  },
  {
    id: 4,
    text: "Fourth task",
    isDone: true,
  },
]

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoList />,
        },
        {
          path: "/list/:id",
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/ToDo/" }
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />}></Route>
        <Route path="/list/:id" element={<ItemDescription todos={todos} />}></Route>
        <Route path="/todo" element={<ToDoList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
)
