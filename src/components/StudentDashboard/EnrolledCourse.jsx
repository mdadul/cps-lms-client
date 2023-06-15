import React, { useEffect, useState } from "react";
import EnrolledCourseCard from "./EnrolledCourseCard";
import Auth from "../../Hooks/Auth";
import { api } from "../../config/index";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function EnrolledCourse() {
  const auth = Auth();
  const { token } = auth;
  const id = auth.user._id;

  const [enrolledCourse, setEnrolledCourse] = useState([]);

  useEffect(() => {
    fetch(`${api}/enroll/me/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setEnrolledCourse(data.enrollments));
    sessionStorage.setItem("enrolledCourse", JSON.stringify(enrolledCourse));
  }, [id, token, enrolledCourse]);

  const handlePath = (id, status) => {
    if (status === "approved") {
      window.location.href = `/student/course/${id}`;
    } else {
      toast.error("Your enrollment is not approved yet");
    }
  };
  return (
    <section className="mx-auto max-w-screen-lg px-4 py-12">
      <div className="mb-12 text-center">
        <div className="mb-6 text-3xl sm:text-5xl">Enrolled Course</div>
      </div>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {enrolledCourse?.length === 0 ? (
          <>
            <h1 className="text-center">No Course Enrolled</h1>
            <Link
              to="/courses"
              className="text-center bg-blue-500 rounded-md text-white py-2 "
            >
              Enroll Now
            </Link>
          </>
        ) : (
          enrolledCourse.map((course) => (
            <Link
              onClick={() =>
                handlePath(course.courseId._id, course.enrollmentStatus)
              }
            >
              <EnrolledCourseCard course={course} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
