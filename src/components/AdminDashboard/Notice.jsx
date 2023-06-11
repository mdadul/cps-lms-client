import React, { useEffect, useState } from "react";
import CourseDetails from "../AdminDashboard/CourseDetails";
import Auth from "../../Hooks/Auth";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import edit from '../../img/edit.png'
import del from '../../img/delete.gif'
import AddNotice from './Notice/AddNotice'
import { api } from "../../config";
export default function Notice() {
  const {id} = useParams();
  const Authentication = Auth();
  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);

  const [notice, setnotice] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/notices/course/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setnotice(data.notice);
        }
      });
  }, [id, notice]);

  const handleDeleteNotice = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this notice?"
    );
    if (!confirm) return;

    fetch(`${api}/notices/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Authentication.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.msg);
          setnotice(notice.filter((notice) => notice._id !== id));
        }
      });
  };

  return (
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Notice</h2>
            <span className="text-xs text-gray-500">
              View course notice and manage course notice
            </span>
          </div>
          <div>
            <Link className="bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => setShowMyModel(true)}> Add Notice</Link>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Description</th>
                  <th className="px-5 py-3">Edit</th>
                  <th className="px-5 py-3">Delete</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {
                  notice.map((notice) => (
                    <tr key={notice._id}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{notice.date}</p>
                    </td>
    
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{notice.title}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{notice.description}</p>
                    </td>
                   
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to={`/users/edit/${notice._id}`}>
                        <img src={edit} alt="edit" className="w-6 h-6" />
                      </Link>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link onClick={()=>handleDeleteNotice(notice._id)}>
                        <img src={del} alt="edit" className="w-6 h-6" />
                      </Link>
                    </td>
                  </tr>
                  ))
                }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddNotice onClose={handleOnClose} visible={showMyModel} id={id}/>
    </CourseDetails>
  );
}
