import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Auth from "../../Hooks/Auth";
import { api } from "../../config";
import Assignment from "./AssignmentCard";
import Layout from "../AdminDashboard/Layout";

export default function ViewAssignment() {
  const { id } = useParams();
  const auth = Auth();
  const { token } = auth;

  const loadTheCourse = () => {
    const enrolledCourse = JSON.parse(localStorage.getItem("enrolledCourse"));
    const course = enrolledCourse.find((course) => course.courseId._id === id);
    return course;
  };

  const course = loadTheCourse();

  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);

  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    fetch(`${api}/assignments/course/${id}`, {
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
          setAssignment(data.assignments);
        }
      });
  }, [id, assignment, token]);

  return (
    <Layout>
        <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
        <div className="text-center">
          <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            {course.courseId.name}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        {assignment.length === 0 ? (
          <h1 className="text-center text-2xl font-semibold">
            No Assignment Found
          </h1>
        ) : (
          assignment.map((assignment) => (
            <Assignment key={assignment._id} assignment={assignment} />
          ))
        )}
      </div>
    </Layout>
  );
}
