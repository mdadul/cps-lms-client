import React from "react";

export default function Instructor() {
  return (
    <div class="w-full max-w-xs text-center">
      <img
        class="object-cover object-center w-full h-48 mx-auto rounded-lg"
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
        alt="avatar"
      />

      <div class="mt-2">
        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
          Steve Ben
        </h3>
        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
          UI/UX
        </span>
      </div>
    </div>
  );
}
