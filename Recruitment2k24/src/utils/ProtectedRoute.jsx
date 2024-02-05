import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = sessionStorage.getItem("Authorization");

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" state={"login"} />;
};

export default ProtectedRoute;
