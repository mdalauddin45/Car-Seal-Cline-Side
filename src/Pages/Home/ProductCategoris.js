import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCategoris = () => {
  const [categoris, setCategoris] = useState([]);
  useEffect(() => {
    fetch(`car-products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-black text-3xl p-5 font-bold">
        ProductCategoris
      </h1>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <Link
          to="/"
          className="px-8 py-3 text-lg font-semibold rounded dark:bg-green-400 dark:text-gray-900"
        >
          {" "}
          Suspendisse
        </Link>
        <Link
          to="/"
          className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
        >
          Malesuada
        </Link>
        <Link
          to="/"
          className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
        >
          Malesuada
        </Link>
      </div>
    </div>
  );
};

export default ProductCategoris;
