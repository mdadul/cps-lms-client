import React, { useEffect, useState } from "react";
import { Nav } from "../common/Nav";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../config";
import Auth from "../../Hooks/Auth";

export default function StudentDashboard() {
  const { id } = useParams();
  const auth = Auth();
  const {token} = auth;
  const navigate = useNavigate();

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(`${api}/contents/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.content);
        setContent(data.content);
      });
  }, [id, token]);

  const initialCourse = {
    title: content[0]?.title,
    description: content[0]?.description,
    videoUrl: content[0]?.videoUrl,
  };

  const [course, setCourse] = useState(initialCourse || {});

  const handleVideo = (item) => {
    const linkParse = item.videoUrl.split("/");
    const videoId = linkParse[linkParse.length - 1];
    setCourse({...item, videoUrl: `https://www.youtube.com/embed/${videoId}`});
  };

  return (
    <div>
      <Nav />
      <div className="bg-gray-50">
        <section className="py-6 bg-primary">
         
          <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <button className="bg-green-500 text-white px-2 py-2 mb-2 rounded-md" onClick={()=> navigate(-1)}>
            Go Back
          </button>
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
              <div className="col-span-full w-full space-y-8 lg:col-span-2">
                <iframe
                  width="100%"
                  className="aspect-video"
                  src={course.videoUrl}
                  title={course.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div>
                  <h1 className="text-lg font-semibold">
                   {course.title}
                  </h1>
                  {/* <h2 className=" pb-4 text-sm leading-[1.7142857] text-gray-600">
                    Uploaded on 23 February 2020
                  </h2> */}
                  <p className="mt-4 text-sm text-gray-800 leading-6">
                  {course.description}
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-gray-50/10 divide-y divide-gray-600/30">
               {
                  content.map((item) => (
                    <div className="w-full flex flex-row gap-2 cursor-pointer hover:bg-gradient-to-r from-slate-50 to-gray-100 p-2 py-3">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
  
                    <div clas="flex flex-col w-full">
                      <div className="cursor-pointer " onClick={()=>handleVideo(item)}>
                        <p className="text-gray-900 text-sm font-medium">
                         {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  ))
               }
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
