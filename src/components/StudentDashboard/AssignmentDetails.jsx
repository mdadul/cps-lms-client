import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import Layout from "../AdminDashboard/Layout";
import SubmitAssignment from "./SubmitAssignment";
import Auth from "../../Hooks/Auth";
import { api } from "../../config";

export default function AssignmentDetails() {
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

  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitted = () => setIsSubmitted(true);

  const course = loadTheCourse();

  useEffect(() => {
    fetch(`${api}/assignments/${id}`, {
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
          setAssignment(data.assignment);
        }
      });
  }, [id, assignment, token]);

  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Assignment</h2>
            <span className="text-xs text-gray-500">
              View course Assignment and manage Assignment
            </span>
          </div>
          <div>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => setShowMyModel(true)}
              disabled={isSubmitted}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-md overflow-hidden">
          <div className="px-4 py-4 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {assignment?.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {assignment?.description?.split("\n").map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Course</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {course?.courseId?.name}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Due Date</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {assignment?.dueDate?.toString()?.slice(0, 10)}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Marks</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {assignment?.maxMarks}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <SubmitAssignment
        onClose={handleOnClose}
        visible={showMyModel}
        assignmentId={id}
        courseId={course?.courseId?._id}
        submitted={handleSubmitted}
      />
    </Layout>
  );
}
