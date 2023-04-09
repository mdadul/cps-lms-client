import React from "react";

export default function Button({ type, label, onChange }) {
  return (
    <button
      type={type}
      onChange={onChange}
      class="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
    >
      {label}
    </button>
  );
}
