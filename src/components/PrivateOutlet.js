import React from "react";
import Auth from "../Hooks/Auth";
import { Navigate, Outlet } from "react-router-dom";
export default function PrivateOutlet() {
  const auth = Auth();
  if (auth) {
    return <Outlet />;
  }
  return <Navigate to="/signin" />;
}
