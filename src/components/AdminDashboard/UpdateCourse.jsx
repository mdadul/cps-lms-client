import React from "react";
import Layout from "./Layout";

export default function AddCourse() {
  return (
    <Layout>
      <div className=" mx-auto">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Update A Course
                <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
              </h1>

              <form action="" className="mt-10 flex flex-col space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Course Name (If you want to change it)
                  </label>
                  <input
                    type="text"
                    placeholder="Course Title"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Course Description (If you want to change it)
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
                    Course Instructor (If you want to change it)
                  </label>
                  <input
                    type="text"
                    placeholder="Instructor Name"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Start Date (If you want to change it)
                  </label>
                  <input
                    type="date"
                    placeholder="Due Date"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    End Date (Expecteded) (If you want to change it)
                  </label>
                  <input
                    type="date"
                    placeholder="Due Date"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Course Duration (in weeks) (If you want to change it)
                  </label>
                  <div className="grid grid-cols-2">
                    <input type="number" placeholder="Weeks" />
                    <input type="number" placeholder="Days" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Course's Cover Image (If you want to change it)
                  </label>
                  <input type="file" className="mt-1 block w-full" />
                </div>
              </form>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Confirm Your Update
              </button>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-red-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
