import React, { useEffect, useState } from "react";
import Auth from "../../../Hooks/Auth";
import { toast } from "react-toastify";
import { api } from "../../../config";

export default function AssignTeacher({ visible, onClose, id }) {
  const auth = Auth();
  const token = auth.token;
  const [Instructor, setInstructor] = useState("");
  const [allInstructors, setAllInstructors] = useState([]);
 

  useEffect(() => {
    fetch(`${api}/users/teachers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setAllInstructors(data.users);
        }
      })
      .catch((err) => console.log(err));

   

   
  }, [id, token, allInstructors]);

  const handleAddInstructor = (e) => {
    e.preventDefault();

    fetch(`${api}/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        courseId: id,
        teacherId: Instructor,
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
    <div className="fixed top-16 md:top-[30%] md:left-[40%] w-full ">
      <div className="relative max-w-lg rounded-md border text-gray-800 shadow-lg bg-white">
        <p className="mt-4 pl-4 text-xl font-bold">Assign New Instructor</p>
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
          onSubmit={handleAddInstructor}
          className="flex flex-col items-center px-8 py-10"
        >
          <select
            onChange={(e) => setInstructor(e.target.value)}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select Instructor</option>
            {allInstructors.map((instructor) => (
              <option value={instructor._id}>{instructor.name}</option>
            ))}
          </select>

          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button
              type="submit"
              className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white"
            >
              Add Instructor
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
