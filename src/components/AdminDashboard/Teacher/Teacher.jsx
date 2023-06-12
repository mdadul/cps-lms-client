import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CourseDetails from "../CourseDetails";
import { api } from "../../../config";
import Auth from "../../../Hooks/Auth";
import { toast } from "react-toastify";
import AssignTeacher from "./AssignTeacher";
import del from "../../../img/delete.gif";

export default function Teacher() {
  const { id } = useParams();
  const Authentication = Auth();
  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${api}/teachers/course/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authentication.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setStudents(data.teachers);
        }
      });
  });

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;
    fetch(`${api}/teachers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authentication.token}`,
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
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Teachers</h2>
            <span className="text-xs text-gray-500">
              View course Instructor
            </span>
          </div>
          <div>
            <Link
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => setShowMyModel(true)}
            >
              Add Instructor
            </Link>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Course Name</th>

                  <th className="px-5 py-3">Remove</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {students?.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No Data Found
                    </td>
                  </tr>
                ) : (
                  students?.map((student) => (
                      <tr>
                        {" "}
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">
                            {student?.teacherId?.name}
                          </p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-full w-full rounded-full"
                                src={student?.teacherId?.avatar}
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="whitespace-no-wrap">
                                {student?.teacherId?.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap">
                            {student?.courseId?.name}
                          </p>
                        </td>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <Link onClick={()=>handleDelete(student._id)}>
                            <img src={del} alt="edit" className="w-6 h-6" />
                          </Link>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AssignTeacher onClose={handleOnClose} visible={showMyModel} id={id} />
    </CourseDetails>
  );
}
