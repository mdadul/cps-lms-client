import React, { useState } from "react";
import CourseDetails from "./CourseDetails";
import AssignmentCard from "./Assignment/AssignmentCard";
import { Link } from "react-router-dom";
import AddAssignment from "./Assignment/AddAssignmnet";
export default function Assignment() {
  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);
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
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
      </div>

      <AddAssignment onClose={handleOnClose} visible={showMyModel} />
    </CourseDetails>
  );
}
