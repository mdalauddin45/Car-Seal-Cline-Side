import React from "react";
import { NavLink } from "react-router-dom";
import { CloudArrowUpIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const SellerMenu = () => {
  return (
    <>
      <NavLink
        to="manage-products"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <PencilSquareIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">Manage Products</span>
      </NavLink>

      <NavLink
        to="add-product"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <CloudArrowUpIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">Add A Product</span>
      </NavLink>
    </>
  );
};

export default SellerMenu;
