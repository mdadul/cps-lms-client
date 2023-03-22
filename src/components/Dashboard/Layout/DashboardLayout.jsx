import React from "react";
import NavBar from "../DashboardNavbar/NavBar";
import Footer from "../Footer/Footer";
import Course from "../../CoursesPage/AllCourses"
import SideBar from "../SideBar/SideBar";
export default function DashboardLayout() {
  return (
    <div>
      <NavBar/>
      <div class="flex overflow-hidden bg-white pt-16">
       <SideBar/>
        <div
          class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <Course/>
          </main>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
