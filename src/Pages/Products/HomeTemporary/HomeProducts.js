import React from "react";

function HomeProducts({ product }) {
  const { name, location, image, originalprice, resaleprice, used, category } =
    product;
  return (
    <div>
      <div className="bg-[#eee] p-10">
        <div className="max-w-xs rounded-md shadow-md dark:bg-white dark:text-gray-900">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">
                {name.slice(0, 18) + "..."}
              </h2>
              <p className="dark:text-gray-900">Location: {location}</p>
              <p className="text-red-400">Orginal Price: ${originalprice}</p>
              <p className="text-green-500">Resale Price: ${resaleprice}</p>

              <p className="dark:text-gray-900">Posted 4 months ago</p>
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
    </div>
  );
}

export default HomeProducts;
