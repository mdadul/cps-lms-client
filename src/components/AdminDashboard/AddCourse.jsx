import React from 'react'
import Layout from './Layout'
export default function AddCourse() {
  return (

    <Layout>
    <div class="flex flex-col h-screen">
      {/* <Nav /> */}
      <div class="flex flex-col w-full h-full">
        <div class="flex flex-row justify-between mb-4">
          <h1 class="text-xl font-semibold">Add Course</h1>
          <a href="/courses" class="text-sm text-gray-500">Cancel</a>
        </div>

        <form class="w-full max-w-md">
          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Course Name</label>
            <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter Course Name" />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Course Description</label>
            <textarea class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="4" placeholder="Enter Course Description"></textarea>
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Course Fee</label>
            <input type="number" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter Course Fee" />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Course Duration</label>
            <input type="number" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter Course Duration" />
          </div>


          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Course Instructor</label>
            <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter Course Instructor Name" />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Instructor Email</label>
            <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter Instructor Email" />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Instructor Phone Number</label>
            <input type="tel" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter Instructor Phone Number" />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Course Start Date</label>
            <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Course End Date</label>
            <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
          </div>

          <div class="flex justify-end">
            <button type="submit" class="w-full py-2 px-4 bg-indigo-500 text-white rounded-md">Add Course</button>
          </div>
        </form>
      </div>
    </div></Layout>
  )
}
