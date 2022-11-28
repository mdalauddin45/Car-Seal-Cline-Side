import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const Category = ({ product, setItem, handleWishList }) => {
  // const [loading, setLoading] = useState(false);
  const {
    name,
    location,
    image,
    originalprice,
    resaleprice,
    used,
    published,
    seller,
  } = product;

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

              <p className="dark:text-gray-900">Used: {used} year</p>
              <p className="dark:text-gray-900">Posted {published}</p>
              <p className="dark:text-gray-900 flex">
                Seller Name:
                {seller?.name ? (
                  <small className="flex text-sm px-1 py-1">
                    {seller?.name}
                    <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
                  </small>
                ) : (
                  <></>
                )}
              </p>
            </div>
            <div className="flex space-x-2 text-sm dark:text-gray-400">
              <label
                htmlFor="booking-modal"
                onClick={() => setItem(product)}
                className="hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white px-2 py-1 rounded"
              >
                Bookd Now
              </label>
              <label
                onClick={() => handleWishList(product)}
                className="hover:text-gray-100 bg-red-500  text-white px-2 py-1 rounded"
              >
                Wishlist
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
