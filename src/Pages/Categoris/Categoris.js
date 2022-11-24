import React, { useEffect } from "react";
import { useState } from "react";
import BookdModal from "../Products/BookdModal";
import HomeProducts from "../Products/HomeTemporary/HomeProducts";
// import Category from "./Category";

const Categoris = () => {
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/categoris")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
  //   console.log(products);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6 ">
        {products.map((product) => (
          <HomeProducts
            key={product._id}
            product={product}
            setItem={setItem}
          ></HomeProducts>
        ))}
      </div>
      <BookdModal setItem={setItem} item={item}></BookdModal>
    </div>
  );
};

export default Categoris;
