import React, { useEffect, useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import BookdModal from "../Products/BookdModal";
import CategoryCard from "./CategoryCard";

const CategorySearch = () => {
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [homes, setHomes] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const state = useLocation();
  const category = state.pathname.split("/")[2]
  console.log(category);



  useEffect(() => {
    fetch(
      `http://localhost:5000/category/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category]);
  console.log(products);

  const handleWishList = (product) => {
    console.log(product);
    const wishlist = {
      productName: product.name,
      location: product.location,
      image: product.image,
      email: user?.email,
      userName: user?.displayName,
      price: product.resaleprice,
    };
    fetch(`http://localhost:5000/wishlists`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("wishlist added confrim");
        } else {
          toast.error(data.message);
        }
      });
  };
  if (loading) {
    return (
      <div className="p-[50%]">
        <SmallSpinner></SmallSpinner>
      </div>
    );
  }
  return (
    <div>
      {loading ? (
        <>
          <SmallSpinner />
        </>
      ) : (
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto   pb-6 ">
            {products &&
              products?.map((product) => (
                <CategoryCard
                  key={product._id}
                  product={product}
                  setItem={setItem}
                  handleWishList={handleWishList}
                ></CategoryCard>
              ))}
          </div>
          {item && <BookdModal setItem={setItem} item={item}></BookdModal>}
        </div>
      )}
    </div>
  );
};

export default CategorySearch;
