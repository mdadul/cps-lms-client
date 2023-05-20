import React from "react";
import { Link } from "react-router-dom";
import edit from "../../img/edit.png"
import del from "../../img/delete.png"
export default function CourseCardDashboard() {
  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        <a
          href="/"
          className="col-span-2 text-left text-gray-600 hover:text-gray-700"
        >
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src="/images/ZyOinD4Qhn5ozsoOwtEjM.png"
              alt=""
              className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
            <span className="absolute top-2 left-2 rounded-full bg-yellow-200 px-2 text-xs font-semibold text-yellow-600">
              Unity
            </span>
            <img
              src="/images/AnbWyIjnwNbW9Wz6c_cja.svg"
              className="absolute inset-1/2 w-10 max-w-full -translate-x-1/2 -translate-y-1/2 transition group-hover:scale-125"
              alt=""
            />
          </div>
        </a>
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <a href="/" className="mt-3 overflow-hidden text-2xl font-semibold">
            {" "}
            How to make open world with C/ in Unity{" "}
          </a>
          <p className="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna .
          </p>
          <a
            href="/"
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            Ben Awad
          </a>

          <div className="flex flex-col text-gray-700 sm:flex-row">
            <div className="flex h-fit space-x-2 text-sm font-medium">
              <div className="rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                Advance level
              </div>

              <div className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                160 Enrolled
              </div>
            </div>
            <Link
              className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-gray-200 text-white sm:ml-auto"
            >
             <img src={edit} alt="edit" className="w-5 h-5" />
            </Link>
            <Link
              className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-gray-200 text-white sm:ml-auto"
            >
             <img src={del} alt="edit" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
