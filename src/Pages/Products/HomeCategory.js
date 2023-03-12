import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Home/cat.webp";
const HomeCategory = () => {
  const [category, setCategory] = useState([]);
  const [uniqData, setUniqData] = useState();

  useEffect(() => {
    fetch("https://car-livid-one.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategory(data);
      });
    const getUniqeData = (data, property) => {
      let newVal = data?.map((curElem) => {
        return curElem[property];
      });
      newVal = [...new Set(newVal)];
      setUniqData(newVal);
      // console.log(newVal);
    };
    const categoryOnlyData = getUniqeData(category, "category");
    // console.log(categoryOnlyData);
  }, [category]);
  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-black text-3xl py-5">Top Brand</h1>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 text-center justify-center text-black">
          {uniqData?.map((cat, i) => (
            <div key={i} className="border p-6">
              <div>
                <img src={img1} className="w-60" alt="/" />
              </div>
              <Link
                to={`/category/${cat}`}
                className="px-20 py-3  text-lg font-semibold hover:border  dark:border-gray-100  hover:bg-green-400 hover:text-white"
              >
                {cat}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
