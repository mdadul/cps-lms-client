import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import AssignmentCard from "./Assignment/AssignmentCard";
import { Link, useParams } from "react-router-dom";
import AddAssignment from "./Assignment/AddAssignmnet";
import { toast } from "react-toastify";
import Auth from "../../Hooks/Auth";
export default function Assignment() {
  const {id} = useParams();
  const auth = Auth();
  const {token} = auth;

  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);

  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/assignments/course/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setAssignment(data.assignments);
        }
      });
  }, [id, assignment,token]);


  return (
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Assignment</h2>
            <span className="text-xs text-gray-500">
              View course Assignment and manage Assignment
            </span>
          </div>
          <div>
            <Link
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => setShowMyModel(true)}
            >
              Add Assignment
            </Link>
          </div>
        </div>
       { assignment.length === 0 ? <h1 className="text-center text-2xl font-semibold">No Assignment Found</h1> : (
          assignment.map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          )))
       }
      </div>

      <AddAssignment onClose={handleOnClose} visible={showMyModel} id={id}/>
    </CourseDetails>
  );
}
