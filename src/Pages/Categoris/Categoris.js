import React, { useEffect } from "react";
import { useState } from "react";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import BookdModal from "../Products/BookdModal";
import HomeProducts from "../Products/HomeTemporary/HomeProducts";
// import Category from "./Category";

const Categoris = () => {
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const date = format(selected, "PP");
  // const {
  //   data: products = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["products", date],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/products?date=${date}`);

  //     const data = await res.json();
  //     return data;
  //   },
  // });

  if (loading) {
    return <SmallSpinner></SmallSpinner>;
  }
  useEffect(() => {
    fetch("http://localhost:5000/categoris")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
  // console.log(products);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6 ">
        {products &&
          products?.map((product) => (
            <HomeProducts
              key={product._id}
              product={product}
              setItem={setItem}
            ></HomeProducts>
          ))}
      </div>
      {item && <BookdModal setItem={setItem} item={item}></BookdModal>}
    </div>
  );
};

export default Categoris;
