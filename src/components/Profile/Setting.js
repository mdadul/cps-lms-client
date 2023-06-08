import React, { useEffect, useState } from "react";
import Auth from "../../Hooks/Auth";
import { toast } from "react-toastify";
export default function Profile() {
  const Authentication = Auth();
  const token = Authentication.token;

  const [users, setusers] = useState({});
  const id = Authentication.user._id;
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authentication.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          setusers(data.user);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, [Authentication.token, id]);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const user = {
      name: users.name,
      avatar: users.avatar,
    };
    fetch(`http://localhost:5000/users/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("User updated successfully");
          setusers({user});
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleUpdateUser}
      className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto"
    >
      <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium">Account Details</p>
          <p className="text-sm text-gray-600">Edit your account details</p>
        </div>

        <button
          type="submit"
          className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
        >
          Update
        </button>
      </div>
      <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
        <p className="shrink-0 w-32 font-medium">Name</p>
        <input
          onChange={(e) => setusers({ ...users, name: e.target.value })}
          value={users.name}
          placeholder=" Name"
          className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
        />
      </div>
      <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
        <p className="shrink-0 w-32 font-medium">Email</p>
        <input
          onChange={(e) => setusers({ ...users, email: e.target.value })}
          value={users.email}
          disabled
          placeholder="your.email@domain.com"
          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1 disabled:bg-gray-100"
        />
      </div>
      <div className="flex flex-col gap-4 py-4  lg:flex-row">
        <div className="shrink-0 w-32  sm:py-4">
          <p className="mb-auto font-medium">Avatar</p>
          <p className="text-sm text-gray-600">Change your avatar</p>
        </div>
        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
          <img src={users.avatar} className="h-16 w-16 rounded-full" alt="" />
          <input
            type="text"
            placeholder="Avatar URL"
            onChange={(e) => setusers({ ...users, avatar: e.target.value })}
            className="max-w-full outline-dashed focus:ring-1 rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 border-2 border-transparent"
          />
        </div>
      </div>
    </form>
  );
}
