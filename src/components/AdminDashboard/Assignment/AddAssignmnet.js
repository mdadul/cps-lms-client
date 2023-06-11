import React, { useState } from "react";
import Auth from "../../../Hooks/Auth";
import { toast } from "react-toastify";
import { api } from "../../../config";

export default function AddAssignment({ visible, onClose, id }) {
  const auth = Auth();
  const token = auth.token;
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [passingMarks, setPassingMarks] = useState("");

  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (date < new Date().toISOString().slice(0, 10)) {
      toast.error("Due date must be greater than today's date");
      return;
    }
    if (maxMarks < passingMarks) {
      toast.error("Max marks must be greater than passing marks");
      return;
    }

    fetch(`${api}/assignments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        courseId: id,
        title,
        description,
        dueDate: date,
        maxMarks,
        passingMarks,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.msg);
          e.target.reset();
        }
      });
  };

  if (!visible) return null;
  return (
    <div className="fixed top-16 md:top-[10%] md:left-[40%] w-full ">
      <div className="relative max-w-lg rounded-md border text-gray-800 shadow-lg bg-white">
        <p className="mt-4 pl-4 text-xl font-bold">Add new Assignment</p>
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
          onSubmit={handleAddAssignment}
          className="flex flex-col items-center px-8 py-10"
        >
          <label className="block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Assignment Title</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter Assignment Title"
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Due Date</p>
            <input
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="date"
              placeholder="Enter Due Date"
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Description</p>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter Description"
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Pass Mark</p>
            <input
              onChange={(e) => setPassingMarks(e.target.value)}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              placeholder="Enter pass mark"
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Marks</p>
            <input
              onChange={(e) => setMaxMarks(e.target.value)}
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              placeholder="Enter marks"
            />
          </label>

          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button
              type="submit"
              className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white"
            >
              Add Assignment
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
