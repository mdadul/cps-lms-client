import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Auth from "../../Hooks/Auth";
import Layout from "./Layout";
import { useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();

  const Authentication = Auth();
  const token = Authentication.token;

  if (!Authentication) {
    window.location.href = "/signin";
  }

  const [users, setusers] = useState({});

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

  console.log(users);


  const handleRole = (e) => {
    const role = e.target.value;
    const newRole = { ...users, role };
    setusers(newRole);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const course = {
      role: users.role,
    };
    console.log(course);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(course),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("User update Successfully");
          setusers({})
          window.location.href = "/studentlist";
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div class="bg-blue-800 px-10 py-10 text-center text-white">
          <p class="font-serif text-2xl font-semibold tracking-wider">
            Update User
          </p>
        </div>

        <form class="space-y-4 px-8 py-10" onSubmit={handleUpdateUser}>
          <select
            onChange={handleRole}
            value={users.role || ""}
            class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            required
          >
            <option value="student">Select Role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
           
          </select>

          <button class="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
            Update
          </button>
        </form>
      </div>
    </Layout>
  );
}
