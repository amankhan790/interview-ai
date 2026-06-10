import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Register from "./features/Auth/Pages/Register";
import Login from "./features/Auth/Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <h1>Home Page....</h1>
  }
]);
