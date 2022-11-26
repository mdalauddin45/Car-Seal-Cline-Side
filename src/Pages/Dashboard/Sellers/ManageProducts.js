import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../api/ProductsData";
import { AuthContext } from "../../../contexts/AuthProvider";
import ProductDataRow from "./AddProducts/ProductDataRow";

const ManageProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const fetchProducts = () =>
    getProducts(user?.email).then((data) => setProducts(data));

  useEffect(() => {
    fetchProducts();
  }, [user]);
  console.log(products);

  return (
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
                    Price
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
              {/* <tbody>
                {products &&
                  products.map((product) => (
                    <ProductDataRow
                      key={product?._id}
                      product={product}
                      fetchProducts={fetchProducts}
                    />
                  ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
