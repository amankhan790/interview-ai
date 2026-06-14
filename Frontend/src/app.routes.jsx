import { createBrowserRouter } from "react-router-dom";
import Register from "./features/Auth/Pages/Register";
import Login from "./features/Auth/Pages/Login";
import Protected from "./features/Auth/Components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";

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
        <Home />
      </Protected>
    ),
  },
  {
    path: "/interview/:InterviewId",
    element: (
      <Protected>
        <Interview />
      </Protected>
    ),
  },
]);
