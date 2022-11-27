// Get all wishlists for a user by email
export const getwishlists = async (email) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/wishlists?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
    }
  );
  const wishlists = await response.json();
  return wishlists;
};

// Get All wishlists for buyer
export const getAllwishlists = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/wishlists`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
    },
  });
  const wishlists = await response.json();
  return wishlists;
};

// Delete a wishlist
export const deleteWishlist = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/wishlists/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
    }
  );

  const data = await response.json();
  return data;
};
