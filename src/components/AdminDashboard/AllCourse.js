import React from "react";
import Layout from "./Layout";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

export default function AllCourse() {
  return (
    <Layout>
      <>
        <div className="flex flex-row gap-6 justify-between mt-5">
          <h1 className="text-3xl font-bold">All Courses</h1>
          <div>
            <Link
              to="/admin/course/add"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-14"
            >
              Add Course
            </Link>
          </div>
        </div>
        <div>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </>
    </Layout>
  );
}
