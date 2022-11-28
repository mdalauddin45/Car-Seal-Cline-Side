import React from "react";
import HomeCategory from "../Products/HomeCategory";
import Banner from "./Banner/Banner";
import CardSection from "./CardSection/CardSection";
import HomeBlog from "./HomeBlog/HomeBlog";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory></HomeCategory>
      <CardSection />
      <HomeBlog />
    </div>
  );
};

export default Home;
