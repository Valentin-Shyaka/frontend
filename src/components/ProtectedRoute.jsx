import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  console.log(pathname)
  const token = localStorage.getItem("token");
  console.log(token)

  if (!token &&  pathname.split('/').includes("dashboard")) {
    console.log("PROTECTED ROUTE")
    return <Navigate to="/studentLogin" />;
  }
  return <Element />;
};