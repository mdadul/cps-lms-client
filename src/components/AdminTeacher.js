import React from "react";
import Auth from "../Hooks/Auth";
import { Navigate, Outlet } from "react-router-dom";
export default function PrivateOutlet() {
  const auth = Auth();

  if (auth.user.role === "admin" || auth.user.role === "teacher") {
    return <Outlet />;
  }
  return <Navigate to="/signin" />;
}
