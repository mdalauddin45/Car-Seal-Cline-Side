import React, { useEffect } from "react";
import { useState } from "react";
import HCategory from "./HCategory";
import HomeProducts from "./HomeTemporary/HomeProducts";

const HomeCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategory(data);
      });
  }, []);
  console.log(category);
  return (
    <div>
      <div>
        {category.map((cat) => (
          <HCategory key={cat._id} cat={cat}></HCategory>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
