import React from "react";
import Product from "../Products/Product";
import Banner from "./Banner/Banner";
import ProductCategoris from "./ProductCategoris";
import TopSection from "./TopSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductCategoris />
      <Product />
    </div>
  );
};

export default Home;
