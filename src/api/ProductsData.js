export const imageUpload = async (image) => {
  console.log(image);
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  }
};

// Add a Category
export const addProduct = async (categoriData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify(categoriData),
  });

  const data = await response.json();
  return data;
};

//get all homes
export const getAllHome = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/homes`);
  const data = await response.json();
  return data;
};

//get filtered homes for hosts
export const getHomes = async (email) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/homes/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

// update a home
export const updateHome = async (categoriData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/homes`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify(categoriData),
  });

  const data = await response.json();
  return data;
};

// Delete a home
export const deleteHome = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/home/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const result = await response.json();
  return result;
};
