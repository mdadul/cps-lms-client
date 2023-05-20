import React from 'react'
import { Nav } from '../common/Nav'
import Layout from '../common/Layout'

export default function AddCourse() {
  return (

    <Layout>

<div class="flex flex-col w-full h-full">
  <div class="flex flex-row justify-between mb-4">
    <h1 class="text-xl font-semibold">Update Course</h1>
    <a href="/courses" class="text-sm text-gray-500">Cancel</a>
  </div>

  <form class="w-full max-w-md">
    <div class="mb-4">
      <label class="block mb-2 text-sm font-medium text-gray-700">Course Name</label>
      <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter Course Name" value="The Course Name"/>
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-medium text-gray-700">Course Description</label>
      <textarea class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="4" placeholder="Enter Course Description">The Course Description</textarea>
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-medium text-gray-700">Course Start Date</label>
      <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value="2023-05-20"/>
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-medium text-gray-700">Course End Date</label>
      <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value="2023-06-10"/>
    </div>

    <div class="flex justify-end">
      <button type="submit" class="w-full py-2 px-4 bg-indigo-500 text-white rounded-md">Update Course</button>
    </div>
  </form>
</div>
</Layout>
  )
}
