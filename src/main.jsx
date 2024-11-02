import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Error from "./Components/Error.jsx";
import Home from "./Components/Home.jsx";
import BooksDetail from "./Components/Main/BooksDetail.jsx";
import ListedBooks from "./Components/listedBooks/listedBooks.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "books/:bookId",
        element: <BooksDetail />,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
