import React, { useEffect, useState } from "react";
import StatCard from "./StatCard";
import Layout from "./Layout";
import Auth from "../../Hooks/Auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { api } from "../../config";

export default function Stat() {
  const auth = Auth();
  const [stat, setStat] = useState([]);
  useEffect(() => {
    fetch(`${api}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setStat(data.users);
        }
      });
  }, [auth.token]);
  return (
    <Layout>
      <div class="mx-auto grid max-w-screen-lg gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link to="/studentlist">
          {" "}
          <StatCard
            title="Students"
            value={stat.filter((student) => student.role === "student").length}
          />
        </Link>
        <Link to="/teacherlist">
          <StatCard
            title="Teachers"
            value={stat.filter((teacher) => teacher.role === "teacher").length}
          />
        </Link>
        <Link to="/userlist">
          {" "}
          <StatCard
            title="Admin"
            value={stat.filter((admin) => admin.role === "admin").length}
          />
        </Link>
      </div>
    </Layout>
  );
}
