import React from "react";
export default function EnrolledCourseCard({ course }) {
  return (
    <article className="">
      <a
        href="/"
        className="flex flex-col rounded border bg-white transition hover:bg-gray-200"
      >
        <div className="">
          <img
            src={course.courseId?.image}
            className="w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex-1 p-4">
          <p className="mb-4 text-xs font-bold">{course.courseId?.category}</p>
          <h6 className="mb-4 text-xl font-light">{course.courseId?.name}</h6>
          <p
            className={
              course.enrollmentStatus === "approved"
                ? "bg-green-500 rounded-md w-24 px-2 text-white font-bold"
                : "bg-red-500 rounded-md w-24 px-2 text-white font-bold"
            }
          >
            {course.enrollmentStatus.toUpperCase()}
          </p>
        </div>
      </a>
    </article>
  );
}
