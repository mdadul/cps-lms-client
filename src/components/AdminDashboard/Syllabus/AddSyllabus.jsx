import React, {useState } from "react";
import Auth from "../../../Hooks/Auth";
import { toast } from "react-toastify";

export default function AddSyllabus({ visible, onClose, id }) {
  const Authentication = Auth();
  const token = Authentication.token;

  const [week, setWeek] = useState("");
  const [topic, setTopic] = useState("");

   const handleAddSyllabus = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/syllabus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":  `Bearer ${token}`,
      },
      body: JSON.stringify({
        courseId : id,
        weekNumber: week,
        topic,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.msg);
          e.target.reset();
          window.location.reload();
        }
      });
  };
  if (!visible) return null;

  return (
    <div className="fixed top-16 md:top-[20%] md:left-[40%] w-full ">
      <div className="relative max-w-lg rounded-md border text-gray-800 shadow-lg bg-white">
        <p className="mt-4 pl-4 text-xl font-bold">Add Syllabus Topic</p>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <form onSubmit={handleAddSyllabus} className="flex flex-col items-center px-8 py-10">
          <label className="block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Week No.</p>
            <input
              onChange={(e) => setWeek(e.target.value)}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              required
              placeholder="Enter week no."
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Topics</p>
            <input
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              required
              placeholder="Enter Topics"
            />
          </label>

          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button type="submit" className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">
              Add Topics
            </button>
            <button
              className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium"
              onClick={onClose}
            >
              Cancel Operation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
