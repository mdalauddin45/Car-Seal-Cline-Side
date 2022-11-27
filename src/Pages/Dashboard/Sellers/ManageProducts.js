import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteproduct,
  getProducts,
  updateProduct,
} from "../../../api/ProductsData";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import ProductDataRow from "./AddProducts/ProductDataRow";

const ManageProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = () =>
    getProducts(user?.email).then((data) => {
      setProducts(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProducts();
  }, [user, loading]);
  // console.log(products);
  const handleUpdate = (id) => {
    updateProduct(id);
  };
  const handleDelet = (id) => {
    deleteproduct(id);
  };
  return (
    <>
      {products && Array.isArray(products) && products.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        resaleprice
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((product) => (
                        <ProductDataRow
                          key={product?._id}
                          product={product}
                          handleUpdate={handleUpdate}
                          handleDelet={handleDelet}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="h-screen text-gray-600 gap-5 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
            There's no Add Product data available right now.
            <Link to="/dashboard/add-product">
              <PrimaryButton classes="px-4 py-1 rounded">
                Add Products
              </PrimaryButton>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default ManageProducts;
