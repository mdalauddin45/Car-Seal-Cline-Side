import { CalendarIcon } from "@heroicons/react/24/solid";
import React from "react";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import DatePicker from "react-datepicker";

const AddProductForm = ({
  handleSubmit,
  arrivalDate,
  setArrivalDate,
  departureDate,
  setDepartureDate,
  loading,
  handleImageChange,
  preview,
  uploadButtonText,
}) => {
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Name of Car
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                name="title"
                id="title"
                type="text"
                placeholder="Enter Your Car Name"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>
            {/* <div className="flex justify-between ">
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">From</p>
                  <DatePicker
                    selected={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    className="w-2/3"
                  />
                </div>

                <CalendarIcon className="h5 w-5" />
              </div>
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">To</p>
                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    className="w-2/3"
                  />
                </div>

                <CalendarIcon className="h5 w-5" />
              </div>
            </div> */}

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Orginal Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Orginal Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Resale Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="Resale_Price"
                  id="price"
                  type="number"
                  placeholder="Resale Price"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="number" className="block text-gray-600">
                  Year of used
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="number"
                  id="number"
                  type="number"
                  placeholder="Enter years of used"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="mobile_number" className="block text-gray-600">
                  Mobile Number
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="mobile_number"
                  id="mobile_number"
                  type="number"
                  placeholder="Enter Your Mobile"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <label
                htmlFor="image"
                className="p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white"
              >
                {uploadButtonText}
                <input
                  type="file"
                  onChange={(event) => handleImageChange(event.target.files[0])}
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
              </label>
              {preview && (
                <img src={preview} className="w-16 h-16" alt="preview_img" />
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 "
                name="description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
            >
              {loading ? <SmallSpinner /> : "Save & Continue"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
