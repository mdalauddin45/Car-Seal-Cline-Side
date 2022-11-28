import React, { useContext, useEffect, useState } from "react";
import { getwishlists } from "../../../api/wishlist";
import { AuthContext } from "../../../contexts/AuthProvider";
import TableRow from "./TableRow";

const MyWishLists = () => {
  const { user } = useContext(AuthContext);
  const [wishlists, setWishlists] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchWishlists = () =>
    getwishlists(user?.email).then((data) => {
      setWishlists(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchWishlists();
  }, [user, loading]);
  // console.log(wishlists);
  return (
    <>
      {wishlists && Array.isArray(wishlists) && wishlists.length > 0 ? (
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
                        Action
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Payment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlists &&
                      wishlists.map((booking) => (
                        <TableRow key={booking._id} booking={booking} />
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
            There's no Wishlists data available right now.
          </div>
        </>
      )}
    </>
  );
};

export default MyWishLists;
