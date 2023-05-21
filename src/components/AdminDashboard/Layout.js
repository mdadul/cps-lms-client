import React from "react";
import Sidebar from "./Sidebar";
import { Nav } from "../common/Nav";

const menuItem = [
  {
    destination: "/",
    text: "Home",
  },
  {
    destination: "/courses",
    text: "Courses",
  },
  {
    destination: "/about",
    text: "About Us",
  },
];
export default function Layout({ children }) {

  return (
    <>
    <Nav menuItem={menuItem}/>
     <div className="flex gap-40 ">
      <Sidebar />
      <main>{children}</main>
    </div>
    </>
   
  );
}
