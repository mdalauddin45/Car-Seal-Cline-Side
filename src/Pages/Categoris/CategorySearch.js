import React, { useEffect, useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useLocation } from "react-router-dom";
import { getCategory } from "../../api/ProductsData";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import BookdModal from "../Products/BookdModal";
import CategoryCard from "./CategoryCard";

const CategorySearch = () => {
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  //   console.log(state);

  const [cat] = useLoaderData();
  const category = cat.category;
  //   console.log(category);
  useEffect(() => {
    fetch(
      `https://car-seal-server-site.vercel.app/category?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category]);

  useEffect(() => {
    getCategory(state?.category)
      .then((data) => {
        // console.log(data);
        setHomes(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [state]);
  //   console.log(homes);
  //   useEffect(() => {
  //     fetch(`https://car-seal-server-site.vercel.app/category?category=Nissan`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setHomes(data);
  //       });
  //   }, []);
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
