import React from "react";
import { Link } from "react-router-dom";

export default function NavLinkM({ destination, text}) {
  return (
    <li>
      <Link
        to={destination}
        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        {text}
      </Link>
    </li>
  );
}
