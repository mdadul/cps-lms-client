import React, { useState } from "react";
import Layout from "./Layout";
import { toast } from "react-toastify";
export default function AddCourse() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleAddCourse = (e) => {
    e.preventDefault();
    const course = {
      name,
      description,
      instructor,
      startDate,
      endDate,
      duration,
      coverImage,
    };

    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Course Added Successfully");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="relative mx-auto">
        <div className="min-h-screen">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Add Course
                <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
              </h1>

              <form
                action=""
                className="mt-10 flex flex-col space-y-4"
                onSubmit={handleAddCourse}
              >
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Course Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setDescription(e.target.value)}
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
                  <input
                    onChange={(e) => setInstructor(e.target.value)}
                    type="text"
                    placeholder="Instructor Name"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Start Date
                  </label>
                  <input
                    onChange={(e) => setStartDate(e.target.value)}
                    type="date"
                    placeholder="start Date"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    End Date (Expecteded)
                  </label>
                  <input
                    onChange={(e) => setEndDate(e.target.value)}
                    type="date"
                    placeholder="Due Date"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Course Duration (in weeks)
                  </label>
                  <div>
                    <input
                      onChange={(e) => setDuration(e.target.value)}
                      type="number"
                      placeholder="Weeks"
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    Course's Cover Image
                  </label>
                  <input
                    type="text"
                    placeholder="Image Link"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    onChange={(e) => setCoverImage(e.target.value)}
                  />
                </div>
              </form>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Add Course
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
