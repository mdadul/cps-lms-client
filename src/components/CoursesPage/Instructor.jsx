import React from "react";

export default function Instructor({image, name}) {
  return (
    <div class="w-full max-w-xs text-center">
      <img
        class="object-cover object-center w-full h-48 mx-auto rounded-lg"
        src={image} alt={name}
      />

      <div class="mt-2">
        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
         {name}
        </h3>
        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
          
        </span>
      </div>
    </div>
  );
}
