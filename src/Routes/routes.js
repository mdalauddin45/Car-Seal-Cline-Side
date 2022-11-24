import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categoris from "../Pages/Categoris/Categoris";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Shared/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/category/:category",
        element: (
          <PrivateRoute>
            <Categoris></Categoris>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
