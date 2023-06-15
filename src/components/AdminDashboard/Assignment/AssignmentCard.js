import React from "react";
import edit from "../../../img/edit.gif";
import del from "../../../img/delete.gif";
import Auth from "../../../Hooks/Auth";
import { toast } from "react-toastify";
import { api } from "../../../config";
import { Link } from "react-router-dom";
export default function Assignment({ assignment }) {
  const auth = Auth();
  const token = auth.token;
  const role = auth?.user?.role;

  const handleDeleteAssignment = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (!proceed) return;
    fetch(`${api}/assignments/${id}`, {
      method: "DELETE",
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
          toast.success(data.msg);
        }
      });
  };

  return (
    <div className="m-5">
      <div className="group mx-5 mt-10 grid px-7 max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto bg-white">
        <div className="col-span-11 flex flex-col  text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">
            Due Date: {assignment?.dueDate?.toString().slice(0, 10)}
          </h3>
          {role === "teacher" ? (
            <Link to={`/assignment/submission/${assignment._id}`}>
              <h1 className="font-bold text-2xl text-blue-500">
                {assignment?.title}
              </h1>
            </Link>
          ) : (
            <h1 className="font-bold text-2xl">{assignment?.title}</h1>
          )}

          <p className="overflow-hidden pr-7 text-sm">
            {assignment?.description?.slice(0, 100)}...
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
        <div>
          <button>
            <img src={edit} alt="edit" className="w-6 h-6" />
          </button>
          <button onClick={() => handleDeleteAssignment(assignment?._id)}>
            <img src={del} alt="deleteIcon" className="w-6 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
