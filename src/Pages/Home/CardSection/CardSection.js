import React from "react";
const CardSection = () => {
  return (
    <div>
      <section className="">
        <div className="hero bg-[url('/src/assets/Home/img_20_a407ad3f-53f1-4cdd-9131-7f06682aac6d_2048x600_crop_top.webp')] text-white lg:h-[508px] w-full mt-32 ">
          <div className="hero-content flex-col lg:flex-row ">
            <div>
              <h1 className=" lg:text-4xl font-bold">
                GET AN EXTRA 20% OFF YOUR FIRST ORDER
              </h1>
              <p className="py-6 lg:text-4xl">
                Enjoy your journey with our comfortable cars.
              </p>
              <button className="text-2xl  bg-white text-black lg:px-5 lg:py-3 p-2">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
