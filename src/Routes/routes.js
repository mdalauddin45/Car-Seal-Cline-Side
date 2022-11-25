import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Categoris from "../Pages/Categoris/Categoris";
import AddAProduct from "../Pages/Dashboard/AddProducts/AddAProduct";
import AllBuyer from "../Pages/Dashboard/Admin/AllBuyer";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Shared/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
        path: "/categoris/:category",
        element: (
          <PrivateRoute>
            <Categoris></Categoris>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categoris/${params.category}`),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-product",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "all-buyers",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
    ],
  },
]);
