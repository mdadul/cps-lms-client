import React, { useEffect, useState } from "react";
import CourseDetails from "../AdminDashboard/CourseDetails";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import edit from '../../img/edit.png'
import deletes from '../../img/delete.gif'
import AddSyllabus from './Syllabus/AddSyllabus'
import Auth from "../../Hooks/Auth";

export default function Syllabus() {
  const {id} = useParams();
  const auth = Auth();
  const token = auth.token;

  const [showMyModel, setShowMyModel] = useState(false);

  const handleOnClose = () => setShowMyModel(false);

  const [syllabus, setSyllabus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/syllabus/${id}`, {
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
          setSyllabus(data.syllabus);
        }
      });
  }, [id]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this topic?");
    if (!confirm) return;

    fetch(`http://localhost:5000/syllabus/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization":  `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({ msg }) => {
        toast.success(msg);
        setSyllabus(syllabus.filter((syllabus) => syllabus._id !== id));
      });
  };

  return (
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Course Syllabus</h2>
            <span className="text-xs text-gray-500">
              View course syllabus and manage course content
            </span>
          </div>
          <div>
            <Link className="bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => setShowMyModel(true)}> Add Topic</Link>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Week No.</th>
                  <th className="px-5 py-3">Topic</th>
                  <th className="px-5 py-3">Edit</th>
                  <th className="px-5 py-3">Delete</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {
                  syllabus
                  .sort((a, b) => a.weekNumber - b.weekNumber)
                  .map((syllabus) => (
                    <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{syllabus.weekNumber}</p>
                    </td>
    
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{syllabus.topic}</p>
                    </td>
                   
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to={`/users/edit/${syllabus._id}`}>
                        <img src={edit} alt="edit" className="w-6 h-6" />
                      </Link>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link onClick={()=>handleDelete(syllabus._id)}>
                        <img src={deletes} alt="edit" className="w-6 h-6" />
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
      <AddSyllabus onClose={handleOnClose} visible={showMyModel} id={id}/>
    </CourseDetails>
  );
}
