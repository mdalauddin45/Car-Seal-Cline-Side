import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [item, setItem] = useState([]);
  const [products, setProducts] = useState(item);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        //setItem(data);
        // setProducts(data);
        const allItems = data;
        console.log(data);
        const categoryItems = allItems.filter(
          (i) => i.category === data.category
        );
        console.log(categoryItems);
        setItem(categoryItems);
      });
  }, [item.category]);
  // console.log(filter);
  console.log(item);
  const filterProduct = (cat) => {
    const updatedList = item?.filter((x) => x?.category === cat);
    setProducts(updatedList);
  };

  return (
    <div>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-black">
        <button onClick={() => filterProduct("Toyota")}>
          {item.map((product) => (
            <p key={product.id} product={product}>
              {product.category}
            </p>
          ))}
        </button>
        <Link
          to={`/category/toyota`}
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6 ">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Products;
