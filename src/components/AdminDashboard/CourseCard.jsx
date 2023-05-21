import React from "react";
import { Link } from "react-router-dom";
import edit from "../../img/edit.png"
import del from "../../img/delete.png"
import Auth from "../../Hooks/Auth";
export default function CourseCard(props) {
  const Authentication = Auth();
  if(!Authentication){
    window.location.href = "/signin";
  }
  if(Authentication.user?.role !== "admin"){
    window.location.href = "/signin";
  }

  const { course } = props;
  const {handleDelete} = props
  

  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        <a
          href="/"
          className="col-span-2 text-left text-gray-600 hover:text-gray-700"
        >
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src={course.image}
              alt=""
              className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
          </div>
        </a>
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <a href="/" className="mt-3 overflow-hidden text-2xl font-semibold">
            {" "}
            {course.name}
          </a>
          <p className="overflow-hidden text-sm">
          {course.description}
          </p>
          <a
            href="/"
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            {course.duration} months
          </a>

          <div className="flex flex-col text-gray-700 sm:flex-row">
            <div className="flex h-fit space-x-2 text-sm font-medium">
              <div className="rounded-full bg-green-100 px-2 py-0.5 text-green-700">
               {course.fee}
              </div>

              <div className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
               {course.category}
              </div>
            </div>
            <Link
              to={`/updatecourse/${course._id}`}
              className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-gray-200 text-white sm:ml-auto"
            >
             <img src={edit} alt="edit" className="w-5 h-5" />
            </Link>
            <button
              onClick={() => {handleDelete(course._id)}}
              className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-gray-200 text-white sm:ml-auto"
            >
             <img src={del} alt="edit" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
