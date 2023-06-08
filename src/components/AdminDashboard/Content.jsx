import React, { useEffect, useState } from "react";
import Auth from "../../Hooks/Auth";
import { toast } from "react-toastify";
import CourseDetails from "./CourseDetails";
import { Link } from "react-router-dom";
import edit from "../../img/edit.png";
import AddContent from "./Content/AddContent";
export default function Content() {
  const Authentication = Auth();

  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);

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
        if (data.error) {
          toast.error(data.error);
        } else {
          setStudents(data.users);
        }
      });
  }, [Authentication.token, Authentication.user]);

  return (
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Course Content</h2>
            <span className="text-xs text-gray-500">
              View course content and manage course content
            </span>
          </div>
          <div>
            <Link
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => setShowMyModel(true)}
            >
              {" "}
              Add Content
            </Link>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Video URL</th>
                  <th className="px-5 py-3">Duration</th>
                  <th className="px-5 py-3">Edit</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr>
                  {" "}
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Introduction To C++</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Video URL</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">2h 30min</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <Link to={`/users/edit/${students._id}`}>
                      <img src={edit} alt="edit" className="w-6 h-6" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddContent onClose={handleOnClose} visible={showMyModel}/>
    </CourseDetails>
  );
}
