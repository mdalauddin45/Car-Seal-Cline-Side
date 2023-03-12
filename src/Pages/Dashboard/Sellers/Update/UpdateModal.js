import React from "react";
import toast from "react-hot-toast";
import SmallSpinner from "../../../../components/Spinner/SmallSpinner";

const UpdateModal = ({
  update,
  setUpdate,
  loading,
  handleImageChange,
  preview,
  uploadButtonText,
}) => {
  //   console.log(update);
  const {
    category,
    description,
    location,
    name,
    originalprice,
    resaleprice,
    used,
    _id,
  } = update;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const originalprice = form.oprice.value;
    const resaleprice = form.rprice.value;
    const used = form.years.value;
    const number = form.number.value;
    const location = form.location.value;
    const category = form.category.value;
    const condition = form.condition.value;
    const description = form.description.value;
    const image = e.target.image.files[0];
    const updating = {
      name,
      location,
      originalprice,
      resaleprice,
      used,
      number,
      category,
      image,
      condition,
      description,
    };
    console.log(updating);
    fetch(`https://car-livid-one.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updating),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-1 text-sm">
                  <label htmlFor="name" className="block text-gray-600">
                    Name of Car
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter Your Car Name"
                    required
                    defaultValue={name}
                  />
                </div>

                <div className="flex justify-between gap-2">
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="Orginal_Price"
                      className="block text-gray-600"
                    >
                      Orginal Price
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                      name="oprice"
                      id="Orginal_Price"
                      type="number"
                      placeholder="Orginal Price"
                      required
                      defaultValue={originalprice}
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="Resale_Price"
                      className="block text-gray-600"
                    >
                      Resale Price
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                      name="rprice"
                      id="Resale_Price"
                      type="number"
                      placeholder="Resale Price"
                      required
                      defaultValue={resaleprice}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  <div className="space-y-1 text-sm">
                    <label htmlFor="year" className="block text-gray-600">
                      Year of used
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                      name="years"
                      id="year"
                      type="number"
                      placeholder="Enter years of used"
                      required
                      defaultValue={used}
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="mobile_number"
                      className="block text-gray-600"
                    >
                      Mobile Number
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                      name="number"
                      id="mobile_number"
                      type="number"
                      placeholder="Enter Your Mobile"
                      required
                      defaultValue={update?.number}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
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
                      defaultValue={location}
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <label htmlFor="category" className="block text-gray-600">
                      Category
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                      name="category"
                      id="category"
                      type="text"
                      placeholder="Category"
                      required
                      defaultValue={category}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="space-y-1 text-sm">
                    <label htmlFor="condition" className="block text-gray-600">
                      Condition
                    </label>
                    <select
                      name="condition"
                      className="select select-bordered  w-full bg-white "
                    >
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>

                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="description"
                      className="block text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                      name="description"
                      id="description"
                      type="text"
                      placeholder="description"
                      required
                      defaultValue={description}
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
                      onChange={(event) =>
                        handleImageChange(event.target.files[0])
                      }
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                  </label>
                  {preview && (
                    <img
                      src={preview}
                      className="w-16 h-16"
                      alt="preview_img"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  className="block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
                >
                  Update & Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
