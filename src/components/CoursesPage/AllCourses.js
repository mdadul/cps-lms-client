import React from "react";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";
import { api } from "../../config";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  console.log(api)
  useEffect(() => {
    fetch(`${api}/courses`) 
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
      });
  }, []);

  
  return (
    <section className="pt-5 pb-10">
      <h1 className="mb-4 text-center font-sans text-5xl font-bold text-gray-800">
        Courses<span className="text-blue-600">.</span>
      </h1>
    <p className="mx-auto w-9/12 mb-12  text-justify text-gray-600">Have you thought about a career in tech, but weren’t sure where to begin? This course will help you find out. Computer Programming For Everyone is one of three courses which introduces you to coding and design, from understanding some of the key developments in the advent of computer technology to describing the features of text-based languages. You’ll explore some of the basics behind how programming works. You’ll also see how people use the skills in the digital workplace. This course group is part of our portfolio of digital and professional skills courses, which covers a diverse range of subjects, from coding to remote working, all available for free to help you begin building your career today.</p>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {
        courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))
      }
      </div>
    </section>
  );
}
