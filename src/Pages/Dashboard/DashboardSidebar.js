import { Bars3Icon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import AdminMenu from "./Admin/AdminMenu";
import BuyerMenu from "./Buyers/BuyerMenu";
import SellerMenu from "./Sellers/SellerMenu";

function DashboardSidebar({ role }) {
  const { user } = useContext(AuthContext);
  const [isActive, setActive] = useState("false");
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  // console.log(role);
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">Gari Bazar</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <h2 className="text-3xl cursor-pointer font-semibold text-center text-gray-800 ">
              <Link to="/"> Gari Bazar</Link>
            </h2>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {role === "seller" ? (
                    <div className="flex">
                      {user?.displayName}
                      <CheckBadgeIcon className="h-5 w-5 ml-1 text-blue-500" />
                    </div>
                  ) : (
                    <>{user?.displayName}</>
                  )}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {role && role !== "saller" ? (
                <>
                  {role === "admin" ? (
                    <AdminMenu role={role} />
                  ) : (
                    <SellerMenu role={role} />
                  )}
                </>
              ) : (
                <BuyerMenu role={role} />
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;
