import React from "react";
import Layout from "./Layout";
import { Link, useParams } from "react-router-dom";

export default function CourseDetails({ children }) {
  const { id } = useParams();

  return (
    <Layout>
      <div className="max-w-screen-md mx-auto">
        <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">
          <nav className="flex flex-wrap gap-4 justify-center">
            <Link
              to={`/course/syllabus/${id}`}
              className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
            >
              Syllabus
            </Link>
            <Link
              to={`/course/content/${id}`}
              className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
            >
              Content
            </Link>
            <Link
              to={`/course/notice/${id}`}
              className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
            >
              Notice
            </Link>
            <Link
              to={`/course/assignment/${id}`}
              className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900 active:bg-gray-200 active:text-gray-900"
            >
              Assignment
            </Link>
            <Link
              to={`/course/enroll/${id}`}
              className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900 active:bg-gray-200 active:text-gray-900"
            >
              Enrolled Students
            </Link>
            <Link
              to={`/course/assignment/${id}`}
              className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900 active:bg-gray-200 active:text-gray-900"
            >
              Assign Teacher
            </Link>
          </nav>
        </div>
      </div>

      <div className="mx-auto">{children}</div>
    </Layout>
  );
}
