import { format } from "date-fns";
import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import PrimaryButton from "../../PrimaryButton";

function BookdModal({ item, setItem }) {
  const { user } = useContext(AuthContext);
  //   console.log(item);
  const [selected, setSelected] = useState(new Date());
  const date = format(selected, "PP");
  const handleModalSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const location = form.location.value;
    const booking = {
      image: item.image,
      email,
      userName: user?.displayName,
      productName: item.name,
      phone,
      price,
      location,
      date,
    };
    console.log(booking);
    fetch(`https://car-livid-one.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("booking confrim");
          setItem(null);
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold ">{item?.name}</h3>
          <form
            onSubmit={handleModalSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-3 text-sm ">
              <label className="block text-sm">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                disabled
                defaultValue={user?.displayName}
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Email</label>
              <input
                defaultValue={user?.email}
                disabled
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Reseal Price</label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                disabled
                defaultValue={item?.resaleprice}
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">Location</label>
              <textarea
                type="text"
                name="location"
                placeholder="location"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            {user?.email ? (
              <>
                <PrimaryButton
                  type="submit"
                  classes="block w-full p-3 text-center rounded-sm text-white"
                >
                  Submit
                </PrimaryButton>
              </>
            ) : (
              <Link to="/login">
                <PrimaryButton classes="block w-full p-3 text-center rounded-sm text-white">
                  Submit
                </PrimaryButton>
              </Link>
            )}
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default BookdModal;
