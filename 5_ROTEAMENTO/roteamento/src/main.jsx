import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

// 1 - Roteamento básico
import Home from "./components/Home.jsx";
import Sobre from "./components/Sobre.jsx";
import Contato from "./components/Contato.jsx";
// 2 - Rota parametrizada
import User from "./components/User.jsx";
// 4 - Rota de erro 404
import NotFound from "./components/NotFound.jsx";
// 5 - Rota com query Params
import Search from "./components/Search.jsx";

import "./index.css";

// 6 - Rota protegida
import { Navigate } from "react-router-dom";
const isAuth = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/sobre",
        element: isAuth ? <Sobre /> : <Navigate to="/" replace={true} />,
      },
      { path: "/usuarios/:userId", element: <User /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
