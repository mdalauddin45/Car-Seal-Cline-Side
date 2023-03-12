import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SmallSpinner from "../components/Spinner/SmallSpinner";
import { AuthContext } from "../contexts/AuthProvider";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  const sellerRole = async (email) => {
    const response = await fetch(
      `https://car-livid-one.vercel.app/user/${email}`,
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
  useEffect(() => {
    setRoleLoading(true);
    sellerRole(user?.email).then((data) => {
      setRole(data);
      setRoleLoading(false);
    });
  }, [user]);

  if (loading || roleLoading) {
    return (
      <div className="h-screen px-[50%] pt-20">
        <SmallSpinner />
      </div>
    );
  }

  if (user && user.uid && role === "seller") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default SellerRoute;
