import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SmallSpinner from "../components/Spinner/SmallSpinner";
import { AuthContext } from "../contexts/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  const adminRole = async (email) => {
    const response = await fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("garibazar-token")}`,
      },
    });
    const user = await response.json();
    return user?.role;
  };
  useEffect(() => {
    setRoleLoading(true);
    adminRole(user?.email).then((data) => {
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

  if (user && user.uid && role === "admin") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default AdminRoute;
