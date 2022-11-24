import React from "react";
import img1 from "../../assets/Products/big_with_watermark_toyota-axio-dhaka-dhaka-5939.jpg";

const Product = ({ product }) => {
  console.log(product);

  return (
    <div className="bg-[#eee] p-10">
      <div className="max-w-xs rounded-md shadow-md dark:bg-white dark:text-gray-900">
        <img
          src={img1}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Donec lectus leo
            </h2>
            <p className="dark:text-gray-900">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-400 dark:text-gray-900"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
