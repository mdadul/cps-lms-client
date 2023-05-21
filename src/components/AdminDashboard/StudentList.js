import React from "react";

export default function StudentList({students}) {
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
              src={students.image}
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
        <p className="whitespace-no-wrap">{students.createdAt}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
          Active
        </span>
      </td>{" "}
    </tr>
  );
}
