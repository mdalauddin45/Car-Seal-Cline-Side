import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import PrimaryButton from "../../PrimaryButton";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="navbar shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                }`
              }
            >
              <Square3Stack3DIcon className="w-5 h-5" />

              <span className="mx-4 font-medium">Blog</span>
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                }`
              }
            >
              <span className="mx-4 font-medium">Dashboard</span>
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-black normal-case text-xl font-bold">
          Gari Bazar
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <Square3Stack3DIcon className="w-5 h-5" />

            <span className="mx-4 font-medium">Blog</span>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <span className="mx-4 font-medium">Dashboard</span>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <div
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                logout();
              }}
              className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
            >
              <svg
                className="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="mx-1">Sign Out</span>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-5 hover:text-green-600">
              Login
            </Link>
            <Link to="/signup" className="mr-5">
              <PrimaryButton classes="rounded-full px-2 py-1">
                Signup
              </PrimaryButton>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
