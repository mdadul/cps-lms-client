import React from "react";

export default function RingText({ text}) {
  return (
    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
      {text}
    </p>
  );
}
