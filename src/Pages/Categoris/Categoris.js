import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import BookdModal from "../Products/BookdModal";
import Category from "./Category";
// import Category from "./Category";

const Categoris = () => {
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const catData = useLoaderData();
  const [cat] = catData;
  const category = cat.category;
  useEffect(() => {
    fetch(`http://localhost:5000/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category]);
  if (loading) {
    return <SmallSpinner></SmallSpinner>;
  }
  return (
    <div>
      {loading ? (
        <>
          <SmallSpinner />
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6 ">
            {products &&
              products?.map((product) => (
                <Category
                  key={product._id}
                  product={product}
                  setItem={setItem}
                ></Category>
              ))}
          </div>
          {item && <BookdModal setItem={setItem} item={item}></BookdModal>}
        </>
      )}
    </div>
  );
};

export default Categoris;
