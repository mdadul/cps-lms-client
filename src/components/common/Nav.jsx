import { useState } from "react";
import logo from "../../img/logo/PS-Logo.png";
import { Link } from "react-router-dom";
import NavLink from "../Element/NavLink";
import NavLinkM from "../Element/NavLinkM";
import Auth from "../../Hooks/Auth";

export const Nav = ({ menuItem }) => {
  const Authentication = Auth();
  const role = Authentication.user?.role;

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/signin";
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const newLocal = "flex items-center hidden space-x-8 lg:flex";
  return (
    <div className="px-4 py-5 z-30 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <img src={logo} alt="logo" className="w-16" />
        </Link>
        <ul className={newLocal}>
          {menuItem.map((item) => (
            <NavLink destination={item.destination} text={item.text} />
          ))}
        </ul>
        {Authentication && role === "admin" && (
          <li>
            <Link
              to="/course"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
            >
              Dashboard
            </Link>
          </li>
        ) }
        {Authentication && role==='student' && (
          <li>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
            >
              Dashboard
            </Link>
          </li>
        )}

        {Authentication ? (
          <Link
            onClick={handleSignOut}
            to="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
          >
            Sign Out
          </Link>
        ) : (
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/signin"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide border rounded shadow-md bg-blue-700 text-white focus:shadow-outline focus:outline-none"
              >
                Sign up
              </Link>
            </li>
          </ul>
        )}

        <div className="lg:hidden">
          <button
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-20">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img src={logo} alt="logo" className="w-16" />
                    </Link>
                  </div>
                  <div>
                    <button
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {role === "admin" &&  (
                      <li>
                        <Link
                          to="/course"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                        >
                          Dashboard
                        </Link>
                      </li>
                    ) }
                    
                    {Authentication &&  role=== 'student' && (
                      <li>
                        <Link
                          to="/dashboard"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}
                    {menuItem.map((item) => (
                      <NavLinkM
                        destination={item.destination}
                        text={item.text}
                      />
                    ))}
                    <li>
                      <Link
                        to="/signup"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                      >
                        Sign up
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signin"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                      >
                        Sign In
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
