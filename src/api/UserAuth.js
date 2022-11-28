export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("garibazar-token", data.token);
    });
};

export const saveBooking = (bookingData) => {
  return fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
    },
    body: JSON.stringify(bookingData),
  });
};

// sealer and buyer
export const getAllUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
    },
  });
  const users = await response.json();

  return users;
};
// Delete a User
export const deleteUser = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
    },
  });

  const data = await response.json();
  return data;
};

//role of admin seller and buyer
export const getRole = async (email) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
    }
  );
  const user = await response.json();
  return user?.role;
};

export const makeSealer = async (user) => {
  delete user._id;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
      body: JSON.stringify({ ...user, role: "seller" }),
    }
  );
  const users = await response.json();

  return users;
};
