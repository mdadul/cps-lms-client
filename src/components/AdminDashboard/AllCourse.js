import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Auth from "../../Hooks/Auth";

export default function AllCourse() {
  
  const Authentication =  Auth();

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses") 
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

    fetch(`http://localhost:5000/courses/${id}`, {
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
      <>
        <div className="flex flex-row gap-6 justify-between mt-5">
          <h1 className="text-3xl font-bold">All Courses</h1>
          <div>
            <Link
              to="/addcourse"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-14"
            >
              Add Course
            </Link>
          </div>
        </div>
        <div>
          {
            courses.map((course) => (
              <CourseCard key={course._id} course={course} 
              handleDelete={handleDelete}/>
            ))
          }
        </div>
      </>
    </Layout>
  );
}
