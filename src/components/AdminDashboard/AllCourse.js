import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Auth from "../../Hooks/Auth";
import StatCard from "./StatCard";
import { api } from "../../config";

export default function AllCourse() {
  const Authentication = Auth();

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`${api}/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!proceed) {
      return;
    }

    fetch(`${api}/courses/${id}`, {
      method: "DELETE",
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
          toast.success("Book deleted successfully");
          const newCourses = courses.filter((course) => course._id !== id);
          setCourses(newCourses);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">ALL Course</h2>
            <span className="text-xs text-gray-500">
              View courses and add new courses
            </span>
          </div>
          <div>
            <Link
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              to="/addcourse"
            >
              Add Course
            </Link>
          </div>
        </div>

        <StatCard title="Total Courses" value={courses.length} />
        <div>
          {courses
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            .map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}
