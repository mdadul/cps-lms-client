import React from "react";

export default function Input({ type, placeholder, value, onChange, ...rest }) {
  return (
    <input
      type={type}
      class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}
