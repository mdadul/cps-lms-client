import React from "react";
import Auth from "../Hooks/Auth";
import { Navigate, Outlet } from "react-router-dom";
export default function AdminOutlet() {
  const auth = Auth();
  const role = auth.user.role;
  if (auth &&  role === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
}
