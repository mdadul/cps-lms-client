import React from "react";
import Layout from "../AdminDashboard/Layout";
import FeatureCard from "../HomePage/Features/FeatureCard";
import LiveClass from "../../img/LiveClass.svg";
import record from "../../img/Rercorded-Video-lecture.svg";
import ask from "../../img/ask-question.svg";
import { Link, useParams } from "react-router-dom";

export default function CourseContent() {
  const { id } = useParams();

  const loadTheCourse = () => {
    const enrolledCourse = JSON.parse(localStorage.getItem("enrolledCourse"));
    const course = enrolledCourse.find((course) => course.courseId._id === id);
    return course;
  };

  const course = loadTheCourse();

  return (
    <Layout>
      <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
        <div className="text-center">
          <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            {course.courseId.name}
          </p>
        </div>
      </div>
      <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
        <Link to={`/student/course/content/${id}`}>
          <FeatureCard
            img={LiveClass}
            title="Course Content"
            description="View your course content here"
          />
        </Link>
        <Link to={`/student/course/assignemnt/${id}`}>
          {" "}
          <FeatureCard
            img={record}
            title="Assignments"
            description="View your assignments here"
          />
        </Link>
        <Link to={`/student/course/leaderboard/${id}`}>
          <FeatureCard
            img={ask}
            title="Leaderboard"
            description="View your leaderboard here"
          />
        </Link>
        <Link to={`/student/course/leaderboard/${id}`}>
          <FeatureCard
            img={ask}
            title="Notice Board"
            description="View your notice here"
          />
        </Link>
      </div>
    </Layout>
  );
}
