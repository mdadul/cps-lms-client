import React from "react";
import Layout from "../common/Layout";

export default function AddCourse() {
  return (
    <Layout>
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Add Course
              <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
            </h1>

            <form action="" className="mt-10 flex flex-col space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Course Title"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Course Description
                </label>
                <textarea
                  rows={4}
                  type="text"
                  placeholder="Course Description"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
            <div>
                <label className="text-xs font-semibold text-gray-500">
                  Course Instructor 
                </label>
                <input type="text" placeholder="Instructor Name" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"/>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Start Date
                </label>
                <input
                  type="date"
                  placeholder="Due Date"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500">
                  End Date (Expecteded)
                </label>
                <input
                  type="date"
                  placeholder="Due Date"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Course Duration (in weeks)
                </label>
                  <div className="grid grid-cols-2">
                    <input type="number" placeholder="Weeks" />
                    <input type="number" placeholder="Days" />
                  </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Course's Cover Image
                </label>
                <input type="file" className="mt-1 block w-full" />
              </div>
            </form>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
            >
              Add Course
            </button>
           
            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-red-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">
              Cancel
            </button>

          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
