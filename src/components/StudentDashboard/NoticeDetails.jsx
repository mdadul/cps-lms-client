import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import Layout from "../AdminDashboard/Layout";
import Auth from "../../Hooks/Auth";
import { api } from "../../config";

export default function NoticeDetails() {
  const { id } = useParams();
  const auth = Auth();
  const { token } = auth;

  const [assignment, setAssignment] = useState({});

  const loadTheCourse = () => {
    const enrolledCourse = JSON.parse(sessionStorage.getItem("enrolledCourse"));
    const course = enrolledCourse.find(
      (course) => course.courseId._id === assignment.courseId
    );
    return course;
  };


  const course = loadTheCourse();

  useEffect(() => {
    fetch(`${api}/notices/${id}`, {
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
          setAssignment(data.notice);
        }
      });
  }, [id, assignment, token]);

  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Notice</h2>
            <span className="text-xs text-gray-500">
              View notice
            </span>
          </div>
          <div>
           <h2 className="bg-green-500 text-white px-2 py-2 rounded-md">{course?.courseId?.name}</h2>
          </div>
        </div>

        <div className="bg-white shadow rounded-md overflow-hidden">
          <div className="px-4 py-4 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {assignment?.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {assignment?.description}
            </p>
          </div>
        
        </div>
      </div>
    
    </Layout>
  );
}
