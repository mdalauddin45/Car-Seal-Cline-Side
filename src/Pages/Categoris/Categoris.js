import React, { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

const Categoris = () => {
  const [item, setItem] = useState([]);
  const [products, setProducts] = useState(item);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
  console.log(products);
  return (
    <div>
      <h1>this is categoris</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6 ">
        {products.map((product) => (
          <Category
            key={product._id}
            product={product}
            setProducts={setProducts}
          ></Category>
        ))}
      </div>
    </div>
  );
};

export default Categoris;
