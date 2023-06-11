import React from "react";
import {Nav} from "../common/Nav";

export default function Layout({ children }) {

  return (
    <>
    <Nav/>
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 min-h-[89vh]">
      <div className="container mx-auto px-6 py-8">{children}</div>
    </main>
    </>
   
  );
}
