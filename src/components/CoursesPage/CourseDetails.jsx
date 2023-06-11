import React, { useEffect, useState } from "react";
import Layout from "../common/Layout";
import Instructor from "./Instructor";
import { Link, useParams } from "react-router-dom";
import { api } from "../../config";
export default function CourseDetails({children}) {
  const {id} = useParams();
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY <= 350) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`${api}/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data.course));

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <>
      <Layout>
        <div className="bg-gray-50">
          {show && (
            <div className="bg-white px-10 py-5 border-2 md:fixed top-48 right-20">
              <p className="text-xl mb-2">
                Course Fee:{" "}
                <span className="font-bold text-blue-700">{course.fee} BDT</span>{" "}
              </p>
              <p className="text-xl">
                Duration :{" "}
                <span className="font-bold text-blue-700">{course.duration} Months</span>
              </p>
              <Link to = {`/enroll/${id}`}>
              <button  className="bg-gradient-to-r from-teal-500 to-indigo-600 px-20 py-2 text-white rounded-md mt-5 md:text-center ">
                Enroll Now
              </button>
              </Link>
            </div>
          )}

          <div className="mx-auto max-w-screen-lg px-3 py-10">
            <div className="space-y-3">
              <h5 className="text-sm font-medium uppercase text-gray-400">
                {course.category}
              </h5>
              <h1 className="text-3xl font-semibold">
               {course.name}
              </h1>

              <div>
                <img
                  src={course.image}
                  alt={course.name}
                  className="rounded-lg w-[70%] h-auto border-4 border-gray-300"
                />
              </div>
            </div>

            <div className="mt-10 bg-white py-2">
              <nav className="flex flex-wrap gap-4">
                <Link 
                  to={`/courses/description/${id}`}
                  className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out  hover:border-b-purple-600 hover:text-purple-600 "
                  
                >
                  Details
                </Link>
                <Link
                  to={`/courses/description/${id}`}
                  className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
                >
                  FAQs
                </Link>

                <Link
                  to={`/courses/curriculum/${id}`}
                  className="inline-flex whitespace-nowrap border-b-2 border-transparent hover:border-b-purple-600 py-2 px-3 text-sm text-gray-600 font-semibold hover:text-purple-600 transition-all duration-200 ease-in-out"
                >
                  Curriculum
                </Link>

                <Link
                  to={`/courses/description/${id}`}
                  className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
                >
                  Reviews
                </Link>
              </nav>
            </div>
          </div>
          <div>
            <div className="mx-auto max-w-screen-lg px-3 py-5">
             
              {children}
             
            </div>
          </div>

          <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-8 mx-auto">
              <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                Instructors
              </h2>

              <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Instructor />
                <Instructor />
                <Instructor />
                <Instructor />
                <Instructor />
                <Instructor />
                <Instructor />
                <Instructor />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
