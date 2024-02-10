import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const isAuthenticated = sessionStorage.getItem("Admin Token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoute;
