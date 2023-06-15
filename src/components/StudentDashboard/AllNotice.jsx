import React, { useEffect, useState } from "react";
import Layout from "../AdminDashboard/Layout";
import Auth from "../../Hooks/Auth";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

import { api } from "../../config";
export default function AllNotice() {
  const { id } = useParams();
  const Authentication = Auth();

  const [notice, setnotice] = useState([]);

  const getCourse = () => {
    const enrolledCourse = JSON.parse(sessionStorage.getItem("enrolledCourse"));
    const course = enrolledCourse.find(
        (course) => course.courseId._id === id
    );
    return course;
    };

    const course = getCourse();
  useEffect(() => {
    fetch(`${api}/notices/course/${id}`, {
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
          setnotice(data?.notice);
        }
      });
  }, [id, notice, Authentication.token]);

 

  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Notice Board</h2>
            <span className="text-xs text-gray-500">
              View all notices
            </span>
          </div>
          <div>
          <h2 className="bg-green-500 text-white px-2 py-2 rounded-md">{course?.courseId?.name}</h2>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {notice?.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No Notice Found
                    </td>
                  </tr>
                ) : (
                  notice.map((notice) => (
                    <tr key={notice._id}>
                        
                    
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{notice?.date.toString().slice(0, 10)}</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{notice?.title}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to={`/notice/details/${notice._id}`} className="text-blue-800 underline">
                        <p className="whitespace-no-wrap">
                          {notice?.description.slice(0, 50)}...
                        </p>
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
    </Layout>
  );
}
