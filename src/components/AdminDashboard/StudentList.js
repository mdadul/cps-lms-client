import React from "react";
import edit from "../../img/edit.png";
import { Link } from "react-router-dom";

export default function StudentList({ students }) {
  return (
    <tr>
      {" "}
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{students._id}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-full w-full rounded-full"
              src={students.avatar}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="whitespace-no-wrap">{students.name}</p>
          </div>
        </div>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{students.role}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{students.email}</p>
      </td>
     
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <Link to={`/users/edit/${students._id}`}>
          <img src={edit} alt="edit" className="w-6 h-6" />
        </Link>
      </td>
    </tr>
  );
}
