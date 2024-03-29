import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import CategorySearch from "../Pages/Categoris/CategorySearch";
import AllBuyer from "../Pages/Dashboard/Admin/AllBuyer";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import Reported from "../Pages/Dashboard/Admin/Reported";
import AllOrders from "../Pages/Dashboard/Buyers/AllOrders";
import MyWishLists from "../Pages/Dashboard/Buyers/MyWishLists";
import Payment from "../Pages/Dashboard/Buyers/Payment";
import AddAProduct from "../Pages/Dashboard/Sellers/AddProducts/AddAProduct";
import ManageProducts from "../Pages/Dashboard/Sellers/ManageProducts";
import MyBuyers from "../Pages/Dashboard/Sellers/MyBuyers";
import Welcome from "../Pages/Dashboard/Welcome";
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
        path: "/category/:category",
        element: <CategorySearch />
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
        path: "",
        element: (
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "my-buyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <SellerRoute>
            <ManageProducts></ManageProducts>
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
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <AllOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "my-wishlists",
        element: (
          <PrivateRoute>
            <MyWishLists />
          </PrivateRoute>
        ),
      },
      {
        path: "all-reporte",
        element: (
          <AdminRoute>
            <Reported />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://car-livid-one.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
