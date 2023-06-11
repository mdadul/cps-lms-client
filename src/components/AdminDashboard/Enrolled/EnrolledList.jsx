import React, { useEffect, useState } from "react";
import Auth from "../../../Hooks/Auth";
import { toast } from "react-toastify";
import { api } from "../../../config";
import CourseDetails from "../CourseDetails";
import edit from "../../../img/edit.png";
import { Link, useParams } from "react-router-dom";

export default function EnrolledStudents() {
  const Authentication = Auth();
  const { id } = useParams();

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch(`${api}/enroll/course/${id}`, {
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
            console.log(data.enrollments);
          setStudents(data.enrollments);
        }
      });
  }, [Authentication.token, Authentication.user, id, students]);

  return (
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">
              Enrolled Studnet List
            </h2>
            <span className="text-xs text-gray-500">
              View accounts of enrolled students
            </span>
          </div>
        </div>

        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">CourseID</th>
                  <th className="px-5 py-3">Transaction Id</th>
                  <th className="px-5 py-3">Enrollment Status</th>
                  <th className="px-5 py-3">Edit</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {students.map((students) => (
                  <tr key={students._id}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">
                        {students.phoneNumber}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        {/* <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src={students.avatar}
                            alt=""
                          />
                        </div> */}
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">
                            {students.userID}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{students.courseId}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">
                        {students.transactionId}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">
                        {students.enrollmentStatus}
                      </p>
                    </td>

                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to={`/users/edit/${students._id}`}>
                        <img src={edit} alt="edit" className="w-6 h-6" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CourseDetails>
  );
}
