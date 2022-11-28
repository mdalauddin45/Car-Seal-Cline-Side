import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import BookdModal from "../Products/BookdModal";
import Category from "./Category";

const Categoris = () => {
  const [item, setItem] = useState(null);
  const [wishlist, setWishlist] = useState(null);
  const [products, setProducts] = useState([]);

  const catData = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  const [cat] = catData;
  const category = cat.category;
  useEffect(() => {
    fetch(`https://car-seal-server-site.vercel.app/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category]);
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
    console.log(wishlist);
    fetch(`https://car-seal-server-site.vercel.app/wishlists`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("wishlist added confrim");
          setWishlist(null);
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
                <Category
                  key={product._id}
                  product={product}
                  setItem={setItem}
                  handleWishList={handleWishList}
                ></Category>
              ))}
          </div>
          {item && <BookdModal setItem={setItem} item={item}></BookdModal>}
        </div>
      )}
    </div>
  );
};

export default Categoris;
