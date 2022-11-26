import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../api/ProductsData";
import { AuthContext } from "../../../contexts/AuthProvider";

const ManageProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  // const fetchProducts = () =>
  //   getProducts(user?.email).then((data) => setProducts(data));

  // useEffect(() => {
  //   fetchProducts();
  // }, [user]);
  // console.log(products);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products);
  return (
    <div>
      <h1>this is ManageProducts</h1>
    </div>
  );
};

export default ManageProducts;
