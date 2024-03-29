import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Auth from "../../Hooks/Auth";
import Layout from "./Layout";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../config";

export default function UpdateCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const Authentication = Auth();
  const token = Authentication.token;

  if (!Authentication) {
    window.location.href = "/signin";
  }

  const [courses, setCourses] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`, {
      method: "GET",
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
          setCourses(data.course);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, [Authentication.token, id]);

  const handleCourseName = (e) => {
    const name = e.target.value;
    const newName = { ...courses, name };
    setCourses(newName);
  };

  const handleDescription = (e) => {
    const description = e.target.value;
    const newDescription = { ...courses, description };
    setCourses(newDescription);
  };

  const handleFee = (e) => {
    const fee = e.target.value;
    const newFee = { ...courses, fee };
    setCourses(newFee);
  };

  const handleDuration = (e) => {
    const duration = e.target.value;
    const newDuration = { ...courses, duration };
    setCourses(newDuration);
  };

  const handleImage = (e) => {
    const image = e.target.value;
    const newImage = { ...courses, image };
    setCourses(newImage);
  };

  const handleCategory = (e) => {
    const category = e.target.value;
    const newCategory = { ...courses, category };
    setCourses(newCategory);
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const course = {
      name: courses.name,
      description: courses.description,
      fee: courses.fee,
      duration: courses.duration,
      image: courses.image,
      category: courses.category,
    };

    fetch(`${api}/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Course Added Successfully");
          setCourses({});
          window.location.href = "/course";
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 rounded-full bg-red-800 px-10 py-2 font-semibold text-white"
      >
        Cancle
      </button>

      <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div className="bg-blue-800 px-10 py-10 text-center text-white">
          <p className="font-serif text-2xl font-semibold tracking-wider">
            Update Course
          </p>
          <p className="text-center text-blue-100">
            Please keep it short and succinct
          </p>
        </div>

        <form className="space-y-4 px-8 py-10" onSubmit={handleAddCourse}>
          <label className="block" for="name">
            <p className="text-gray-600">Course Title</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              required
              onChange={handleCourseName}
              value={courses.name || ""}
              placeholder="Enter your course Title"
            />
          </label>

          <label className="block" for="name">
            <p className="text-gray-600">Description</p>
            <textarea
              className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              required
              value={courses.description || ""}
              onChange={handleDescription}
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            ></textarea>
          </label>
          <label className="block" for="name">
            <p className="text-gray-600">Fee</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              required
              value={courses.fee || ""}
              onChange={handleFee}
              placeholder="Enter course Fee"
            />
          </label>
          <label className="block" for="name">
            <p className="text-gray-600">Course Duration</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              required
              value={courses.duration || ""}
              onChange={handleDuration}
              placeholder="Enter course Duration"
            />
          </label>
          <label className="block" for="name">
            <p className="text-gray-600">Course Image</p>
            <input
              onChange={handleImage}
              value={courses.image || ""}
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter course Image URL"
            />
          </label>

          <select
            onChange={handleCategory}
            value={courses.category || ""}
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            required
          >
            <option value="uncategories">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Devlopment</option>
            <option value="design">Design</option>
            <option value="programming">Programming</option>
            <option value="others">Others</option>
          </select>

          <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
            Update
          </button>
        </form>
      </div>
    </Layout>
  );
}
