import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Register from "./features/Auth/Pages/Register";
import Login from "./features/Auth/Pages/Login";
import Protected from "./features/Auth/Components/Protected";

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
    element: (
      <Protected>
        <h1>Home Page....</h1>
      </Protected>
    ),
  },
]);
