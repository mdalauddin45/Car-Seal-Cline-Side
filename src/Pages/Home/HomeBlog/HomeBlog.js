import React from "react";
import img1 from "../../../assets/Home/img_23_ef926642-e740-4e47-97dd-276f5122e066_580x400_crop_top.webp";
import img2 from "../../../assets/Home/img_24_97c29acf-76b2-4b91-a8d6-f7dd47f398e5_580x400_crop_top.webp";
function HomeBlog() {
  return (
    <section className="text-center pt-10">
      <h1 className="text-black text-3xl font-bold">OUR BLOG</h1>
      <div className="max-w-screen-xl mx-auto px-10 p-b  md:grid md:grid-cols-2  lg:grid lg:grid-cols-2 text-center">
        <div className="py-20 text-center text-black">
          <div className="flex flex-col max-w-lg  space-y-6 overflow-hidden  shadow-md bg-[#f5f6f8] dark:text-gray-100">
            <div>
              <img src={img2} alt="" className="w-full mb-4 h-60 sm:h-96 " />
              <div className="px-6 pb-6">
                <p className="text-xl text-center text-black">
                  September 16, 2021
                </p>
                <h2 className="mb-1 text-2xl text-center font-bold text-black">
                  How to use a dealer swap to increase ...
                </h2>
                <p className="text-xl text-center text-black ">
                  Our industry made a great number of legendary cars, and this
                  is a true argument that it is essent...
                </p>
                <small className="text-black text-xl">Read More..</small>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 text-center text-black">
          <div className="flex flex-col max-w-lg  space-y-6 overflow-hidden  shadow-md bg-[#f5f6f8] dark:text-gray-100">
            <div>
              <img src={img1} alt="" className="w-full mb-4 h-60 sm:h-96 " />
              <div className="px-6 pb-6">
                <p className="text-xl text-center text-black">
                  September 17, 2022
                </p>
                <h2 className="mb-1 text-2xl text-center font-bold text-black">
                  Are you ready for the online dealership?
                </h2>
                <p className="text-xl text-center text-black ">
                  Car is a part of culture because we spend a significant amount
                  of time of our lives by the steeri...
                </p>
                <small className="text-black text-xl">Read More..</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBlog;
