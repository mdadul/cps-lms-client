import React from "react";
import course from "../../img/course.png";
import student from "../../img/students.png";
import teacher from "../../img/teacher.png";
import revenue from "../../img/revenue.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="fixed left-0 min-h-screen select-none border bg-gray-100 shadow">
        <div className="[&>.tooltip]:hover:opacity-100 h-14 w-16 cursor-pointer p-3">
          <div className="border-gray pointer-events-auto absolute flex h-10 w-10 items-center justify-center rounded-full text-gray-200 shadow duration-100 hover:bg-gray-300">
            <img src={course} alt="course" className="h-10 w-10" />
          </div>
          <Link to='/admin/course' className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">
            Courses
          </Link>
        </div>

        <div className="[&>.tooltip]:hover:opacity-100 h-14 w-16 cursor-pointer p-3">
          <div className="border-gray pointer-events-auto absolute flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-gray-200 shadow duration-100 hover:bg-gray-300">
            <img src={teacher} alt="teacher" className="h-10 w-10" />
          </div>
          <div className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">
            Teacher
          </div>
        </div>

        <div className="[&>.tooltip]:hover:opacity-100 h-14 w-16 cursor-pointer p-3">
          <div className="border-gray pointer-events-auto absolute flex h-10 w-10 items-center justify-center rounded-full text-gray-200 shadow duration-100 hover:bg-gray-300">
            <img src={student} alt="student" className="h-10 w-10" />
          </div>
          <div className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">
            Students
          </div>
        </div>

        <div className="[&>.tooltip]:hover:opacity-100 h-14 w-16 cursor-pointer p-3">
          <div className="border-gray pointer-events-auto absolute flex h-10 w-10 items-center justify-center rounded-full text-gray-200 shadow duration-100 hover:bg-gray-300">
            <img src={revenue} alt="revenue" className="h-10 w-10" />
          </div>
          <div className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">
            Revenue
          </div>
        </div>
      </div>
    </div>
  );
}
