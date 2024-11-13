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
import PrivateRoute from "./Components/Main/Private/PrivateRoute.jsx";
import ListedBooks from "./Components/listedBooks/listedBooks.jsx";
import Login from "./Firebase/Login.jsx";
import AuthProvider from "./Firebase/Providers/AuthProvider.jsx";
import SignUp from "./Firebase/SignUp.jsx";
import "./index.css";

const router = createBrowserRouter(
  [
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
          element: (
            <PrivateRoute>
              <ListedBooks />
            </PrivateRoute>
          ),
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
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
