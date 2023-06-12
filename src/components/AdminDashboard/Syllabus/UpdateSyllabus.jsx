import React, { useState } from "react";
import { toast } from "react-toastify";
import Auth from "../../../Hooks/Auth";
import { api } from "../../../config";

export default function UpdateSyllabus({ visible, onClose, data }) {
  const auth = Auth();
  const token = auth.token;

  const [syllabus, setSyllabus] = useState(data);

  const handleUpdateSyllabus = (e) => {
    e.preventDefault();
    fetch(`${api}/syllabus/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Athorization": `Bearer ${token}`,
      },
      body: JSON.stringify(syllabus),
    })
      .then((res) => res.json())
      .then(({ msg, updatedSyllabus }) => {
        toast.success(msg);
        setSyllabus(updatedSyllabus);
        onClose();
      }
      );
  };

  const handleChange = (e) => {
    setSyllabus({ ...syllabus, [e.target.name]: e.target.value });
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

        <form
          onSubmit={handleUpdateSyllabus}
          className="flex flex-col items-center px-8 py-10"
        >
          <label className="block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Week No.</p>
            <input
              onChange={handleChange}
              value={syllabus.weekNumber}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              placeholder="Enter week no."
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Topics</p>
            <input
              value={syllabus.topic || ""}
              onChange={handleChange}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter Topics"
            />
          </label>

          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button
              type="submit"
              className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white"
            >
              Update Topics
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
