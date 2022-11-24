import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState(item);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("car-products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItem(data);
        setFilter(data);
      });
  }, []);
  console.log(filter);
  return (
    <div>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-black">
        <Link
          to="/"
          className="px-8 py-3 text-lg font-semibold rounded dark:bg-green-400 dark:text-gray-900"
        >
          TOYOTA
        </Link>
        <Link
          to="/"
          className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
        >
          NISSAN
        </Link>
        <Link
          to="/"
          className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
        >
          LEXUS
        </Link>
      </div>
      <div>
        {filter.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
