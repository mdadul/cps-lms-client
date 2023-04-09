import React from "react";
import Syllabus from "./Syllabus";

export default function CoursePromotion() {
  return (
    <div class="relative ">
      <svg
        class="absolute -z-10 -top-10 opacity-20 "
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="a"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="scale(2) rotate(0)"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="hsla(0,0%,100%,1)"
            />
            <path
              d="M3.25 10h13.5M10 3.25v13.5"
              stroke-linecap="square"
              stroke-width="0.5"
              stroke="hsla(258.5,59.4%,59.4%,1)"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(0,0)"
          fill="url(#a)"
        />
      </svg>
      <Syllabus/>
    </div>
  );
}
