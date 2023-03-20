import React from "react";
import { BsFacebook,BsLinkedin } from "react-icons/bs";
export default function MemberCard({ img, title, description }) {
  return (
    <>
      <div class="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center">
        <div class="mb-4">
          <img
            class="h-56 rounded-lg object-cover md:w-56"
            src={img}
            alt=""
          />
        </div>
        <div class="">
          <p class="text-xl font-medium text-gray-50">{title}</p>
          <p class="mb-4 text-sm font-medium text-gray-500">
            {description}
          </p>
          <div class="mb-3"></div>
         
          <div class="flex justify-center gap-4 text-white">
            <a
              href="https://www.facebook.com/sorowar.mahabub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook/>
            </a>
            <a
              href="https://www.linkedin.com/in/sorowar-mahabub-0b4b3a1a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
