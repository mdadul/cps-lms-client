import { useState } from "react";
import { toast } from "react-toastify";
import Auth from '../../Hooks/Auth'
import Layout from "./Layout";

export default function AddCourse() {
  const Authentication =  Auth();

  const token = Authentication.token
  console.log(token)
  console.log(Authentication.user)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

 

  const handleAddCourse = (e) => {
    e.preventDefault();
    const course = { name, description, fee, duration, image, category };
    console.log(course);
    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":  `Bearer ${token}`
      },
      body: JSON.stringify(course),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
       toast.error(data.error);
      } else {
       toast.success("Course Added Successfully");
        e.target.reset();
      }
    })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div class="bg-blue-800 px-10 py-10 text-center text-white">
          <p class="font-serif text-2xl font-semibold tracking-wider">
            Add Course
          </p>
          <p class="text-center text-blue-100">
            Please keep it short and succinct
          </p>
        </div>
      

        <form class="space-y-4 px-8 py-10" onSubmit={handleAddCourse}>
          <label class="block" for="name">
            <p class="text-gray-600">Course Title</p>
            <input
              
              class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              required
              placeholder="Enter your course Title"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label class="block" for="name">
            <p class="text-gray-600">Description</p>
            <textarea
             
              class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              required
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            ></textarea>
          </label>
          <label class="block" for="name">
            <p class="text-gray-600">Fee</p>
            <input
              
              class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              required
              onChange={(e) => setFee(e.target.value)}
              placeholder="Enter course Fee"
            />
          </label>
          <label class="block" for="name">
            <p class="text-gray-600">Course Duration</p>
            <input
             
              class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="number"
              required
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter course Duration"
            />
          </label>
          <label class="block" for="name">
            <p class="text-gray-600">Course Image</p>
            <input
              onChange={(e) => setImage(e.target.value)}
              class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter course Image URL"

            />
          </label>

          <select
            onChange={(e) => setCategory(e.target.value)}
            class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            required
          >
            <option value="uncategories">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Devlopment</option>
            <option value="design">Design</option>
            <option value="programming">Programming</option>
            <option value="others">Others</option>
          </select>

          <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
