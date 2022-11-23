import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 pt-10 lg:top-1/4 px-5">
        <h1 className="text-xl lg:text-6xl font-bold text-white">
          Find your next car with us
        </h1>
      </div>

      <div className="absolute flex  py-10 px-5 lg:left-24 lg:top-[210px]">
        <p className="text-sm lg:text-2xl text-white ">
          Leading online automotive marketplace in Bangladesh
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
