import React from "react";

export default function UpdateNotice({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed top-16 md:top-[10%] md:left-[40%] w-full ">
      <div className="relative max-w-lg rounded-md border text-gray-800 shadow-lg bg-white">
        <p className="mt-4 pl-4 text-xl font-bold">Add new Notice</p>
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

        <div className="flex flex-col items-center px-8 py-10">
          <label className="block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Date</p>
            <input
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="date"
              placeholder="Enter date"
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Title</p>
            <input
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter Title"
            />
          </label>
          <label className="mt-4 block w-full" for="name">
            <p className="mb-1 text-sm text-gray-600">Description</p>
            <textarea 
              rows="5"
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter Description"
            />
          </label>
          

          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">
              Add Notice
            </button>
            <button
              className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium"
              onClick={onClose}
            >
              Cancel Operation
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
