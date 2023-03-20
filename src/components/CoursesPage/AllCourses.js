import React from "react";
import CourseCard from "./CourseCard";

export default function AllCourses() {
  return (
    <section className="pt-5 pb-10">
      <h1 className="mb-4 text-center font-sans text-5xl font-bold text-gray-800">
        Courses<span className="text-blue-600">.</span>
      </h1>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
}
