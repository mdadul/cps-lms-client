import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Auth from "../../Hooks/Auth";
import StudentList from "./StudentList";
import { toast } from "react-toastify";

export default function Students() {
  const Authentication = Auth();

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authentication.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.error) {
          toast.error(data.error);
        } else{
        setStudents(data.users);
        }
      });
  }, [Authentication.token]);

  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Studnet List</h2>
            <span className="text-xs text-gray-500">
              View accounts of registered students
            </span>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">User Role</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Edit</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                
                  {students.map((student) => (
                    <StudentList students={student} key={student._id} />
                  ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
