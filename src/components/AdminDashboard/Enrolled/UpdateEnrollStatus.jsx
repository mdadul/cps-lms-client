import React, { useEffect, useState } from "react";
import CourseDetails from "../CourseDetails";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../config";
import Auth from "../../../Hooks/Auth";
import { toast } from "react-toastify";

export default function UpdateEnrollStatus() {
  const { id } = useParams();
  const auth = Auth();
  const { token } = auth;

  const navigate = useNavigate();

  const [enroll, setEnroll] = useState({});
  useEffect(() => {
    fetch(`${api}/enroll/${id}`, {
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
          setEnroll(data.enrollment);
        }
      })
      .catch((err) => {
        toast.error(err.msg);
      });
  },[id,token]);
  const handleStatus = (e) => {
    setEnroll((prevState) => ({
      ...prevState,
      enrollmentStatus: e.target.value,
    }));
  };
  const handleUpdateStatus = (e) => {
    e.preventDefault();
    const enrolls = {
      enrollmentStatus: enroll.enrollmentStatus,
    };
    fetch(`${api}/enroll/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(enrolls),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          console.log(enroll.enrollmentStatus);
          toast.success(data.msg);
          navigate(-1);
        }
      });
  };

  return (
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">
              Update Enrollment Status
            </h2>
          </div>
          <div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={() => navigate(-1)}
            >
              Cancle
            </button>
          </div>
        </div>

        <form className="w-full max-w-lg" onSubmit={handleUpdateStatus}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Status
              </label>
              <select
                className="w-full border border-gray-400 px-3 py-2 outline-none"
                name="status"
                onChange={handleStatus}
                value={enroll.enrollmentStatus || ""}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="my-2 mx-auto">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </CourseDetails>
  );
}
