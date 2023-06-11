import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import { useParams } from "react-router-dom";
import { api } from "../../config";

export default function Curriculum() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`${api}/syllabus/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data.syllabus));
  }, [id]);
  return(
<CourseDetails>{
    course.map((item) => (
      <div className="flex px-2 py-2 gap-2">
        <h3 className="bg-green-800 text-white font-bold rounded-md px-5 py-2">Week{item.weekNumber}</h3>
        <p className="px-2 bg-gray-200 rounded-md">{item.topic}</p>
      </div>
    ))}
  </CourseDetails>
  ) 
}
