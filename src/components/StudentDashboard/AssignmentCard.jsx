import React from "react";
export default function Assignment({ assignment }) {
  return (
    <div className="m-5">
      <div className="group mx-5 mt-10 grid px-7 max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto bg-white">
        <div className="col-span-11 flex flex-col  text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">
            Due Date: {assignment?.dueDate.toString().slice(0, 10)}
          </h3>
          <a
            href="/"
            className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
          >
            {assignment?.title}
          </a>
          <p className="overflow-hidden pr-7 text-sm">
            {assignment?.description}
          </p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div className="">
              Marks:
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {" "}
                {assignment?.maxMarks}
              </span>
            </div>
            <div className="">
              Pass Marks:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {assignment?.passingMarks}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
