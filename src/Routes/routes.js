import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categoris from "../Pages/Categoris/Categoris";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Shared/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Signup from "../Pages/Signup/Signup";

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
      {
        path: "/category/toyota",
        element: <Categoris></Categoris>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categoris/${params.category}`),
      },
    ],
  },
]);
