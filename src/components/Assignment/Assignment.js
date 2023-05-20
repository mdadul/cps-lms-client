import React from "react";
import edit from '../../img/edit.png'
import del from '../../img/delete.png'
export default function Assignment() {
  return (
    <div className="m-5">
      <div className="group mx-5 mt-10 grid px-7 max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        <div className="col-span-11 flex flex-col  text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">Due Date: 12 APR 2023</h3>
          <a
            href="/"
            className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
          >
            Assignment Title
          </a>
          <p className="overflow-hidden pr-7 text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna .
          </p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div className="">
              Marks:
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {" "}
                20
              </span>
            </div>
            <div className="">
              Pass Marks:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                12
              </span>
            </div>
          </div>
        </div>
        <div>
            <button >
                <img src={edit} alt="edit" className="w-6 h-6"/>
            </button>
            <button >
                <img src={del} alt="deleteIcon" className="w-6 h-7"/>
            </button>
        </div>
      </div>
      
    </div>
  );
}
