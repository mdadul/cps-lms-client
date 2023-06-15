import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import { useParams } from "react-router-dom";
import { api } from "../../config";

export default function Details() {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch(`${api}/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data.course));
  }, [id]);
  return (
    <CourseDetails>
      {course?.description?.split("\n").map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </CourseDetails>
  );
}
