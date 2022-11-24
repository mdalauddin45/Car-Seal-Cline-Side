import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import DashboardSidebar from "../Pages/Dashboard/DashboardSidebar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    adminRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  console.log(user);
  return (
    <div className="relative min-h-screen md:flex">
      {loading ? (
        ""
      ) : (
        <>
          <DashboardSidebar role={role} />
          <div className="flex-1  md:ml-64">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
