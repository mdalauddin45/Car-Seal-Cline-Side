import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

function BookdModal({ product, setProducts }) {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold ">name</h3>
          <form className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-3 text-sm ">
              <input
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                disabled
              />
            </div>

            <div className="space-y-3 text-sm ">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                required
                defaultValue={user?.displayName}
              />
            </div>
            <div className="space-y-3 text-sm">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <input
                defaultValue={user?.email}
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm text-white bg-[#3A4256]"
            >
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default BookdModal;
