import React from "react";
import Layout from "../AdminDashboard/Layout";
import Auth from "../../Hooks/Auth";

export default function Profile() {
  const auth = Auth();
  const name = auth.user.name;
  const email = auth.user.email;
  const role = auth.user.role;
  const image = auth.user.avatar;
  const date = auth.user.createdAt;

  return (
    <Layout>
      <div class="mx-auto max-w-sm">
        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div class="relative mx-auto w-36 rounded-full">
            <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
            <img
              class="mx-auto h-auto w-full rounded-full"
              src={image}
              alt={name}
            />
          </div>
          <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            {name}
          </h1>
          <h3 class="font-lg text-semibold text-center leading-6 text-white bg-green-700 rounded-md w-24 mx-auto">
            {role.toUpperCase()}
          </h3>
          <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
            {email}
          </p>
          <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li class="flex items-center py-3 text-sm">
              <span>Joined On</span>
              <span class="ml-auto">{date}</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
