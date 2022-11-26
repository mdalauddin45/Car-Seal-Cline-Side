import React from "react";
import { NavLink } from "react-router-dom";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const BuyerMenu = ({ role }) => {
  return (
    <>
      <NavLink
        to="my-orders"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <ShoppingBagIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">My Orders</span>
      </NavLink>
      <NavLink
        to="my-wishlists"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <HeartIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">My Wishlists</span>
      </NavLink>
    </>
  );
};

export default BuyerMenu;
