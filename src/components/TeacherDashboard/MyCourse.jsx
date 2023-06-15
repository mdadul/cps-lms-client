import React, { useEffect, useState } from "react";
import CourseCard from "../AdminDashboard/CourseCard";
import StatCard from "../AdminDashboard/StatCard";
import { api } from "../../config";
import Auth from "../../Hooks/Auth";

export default function MyCourse() {
  const auth = Auth();
  const id = auth.user._id;
  const { token } = auth;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${api}/teachers/me/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data?.courses);
      });
  }, [id, courses, token]);

  return (
    <>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">ALL Course</h2>
            <span className="text-xs text-gray-500">
              View courses and add new courses
            </span>
          </div>
        </div>

        <StatCard title="Total Courses" value={courses?.length} />
        <div>
          {courses.map((course) => (
            <CourseCard key={course._id} course={course.courseId} />
          ))}
        </div>
      </div>
    </>
  );
}
