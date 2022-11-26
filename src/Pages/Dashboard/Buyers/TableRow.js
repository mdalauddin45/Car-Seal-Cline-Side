import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteBooking } from "../../../api/Booking";

const TableRow = ({ booking, fetchBookings }) => {
  const { image, location, price, productName, _id } = booking;
  const handleDelet = () => {
    console.log(_id);
    deleteBooking(_id);
  };
  //   console.log(booking);

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="/"
                src={image}
                className="mx-auto  rounded h-32 w-32 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{productName} </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{location}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={handleDelet}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <button className="relative">Delet</button>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {booking?.price && !booking?.paid && (
          <Link
            to={`/dashboard/payment/${booking._id}`}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <button className="relative">pay</button>
          </Link>
        )}
        {booking?.price && booking?.paid && (
          <span className="text-green-500">Paid</span>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
