import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex gap-40 ">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
