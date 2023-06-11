import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import CourseDetails from "./CourseDetails";
import { Link, useParams } from "react-router-dom";
import edit from "../../img/edit.png";
import del from "../../img/delete.gif";
import AddContent from "./Content/AddContent";
import Auth from "../../Hooks/Auth";
import { api } from "../../config";
export default function Content() {
  const { id } = useParams();
  const auth = Auth();
  const token = auth.token;

  const [showMyModel, setShowMyModel] = useState(false);
  const handleOnClose = () => setShowMyModel(false);

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(`${api}/contents/${id}`, {
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
          setContent(data.content);
        }
      });
  }, [id,content,token]);

  const handleDeleteContent = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this topic?"
    );
    if (!confirm) return;

    fetch(`${api}/contents/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({ msg }) => {
        toast.success(msg);
        setContent(content.filter((content) => content._id !== id));
      });
  };
  return (
    <CourseDetails>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">Course Content</h2>
            <span className="text-xs text-gray-500">
              View course content and manage course content
            </span>
          </div>
          <div>
            <Link
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => setShowMyModel(true)}
            >
              {" "}
              Add Content
            </Link>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Video URL</th>
                  <th className="px-5 py-3">Edit</th>
                  <th className="px-5 py-3">Delete</th>

                </tr>
              </thead>
              <tbody className="text-gray-500">
                {content.map((item) => (
                  <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">{item.title}</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to={item.videoUrl}>
                        <p className="whitespace-no-wrap">{item.videoUrl}</p>
                      </Link>
                    </td>
                    
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to={`/users/edit/${item._id}`}>
                        <img src={edit} alt="edit" className="w-6 h-6" />
                      </Link>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link onClick={()=>handleDeleteContent(item._id)}>
                        <img src={del} alt="edit" className="w-6 h-6" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddContent onClose={handleOnClose} visible={showMyModel} id={id} />
    </CourseDetails>
  );
}
