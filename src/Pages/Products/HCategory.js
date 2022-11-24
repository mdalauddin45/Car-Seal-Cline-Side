import React from "react";
import { Link } from "react-router-dom";

const HCategory = ({ cat }) => {
  const { category } = cat;
  return (
    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-black">
      <Link
        to={`/category/${category}`}
        className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
      >
        {category}
      </Link>
    </div>
  );
};

export default HCategory;
