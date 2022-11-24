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
  console.log("test");
  const users = await response.json();

  return users;
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
