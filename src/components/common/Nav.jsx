import { useState } from "react";
import logo from "../../img/logo/PS-Logo.png";
import { Link } from "react-router-dom";
import NavLink from "../Element/NavLink";
import NavLinkM from "../Element/NavLinkM";
import Auth from "../../Hooks/Auth";

export const Nav = () => {
  let menuItem = [];

  const auth = Auth();
  const name = auth.user?.name;
  const avater = auth.user?.avatar;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const role = auth.user?.role;
  if (auth === false) {
    menuItem = [
      {
        destination: "/",
        text: "Home",
      },

      {
        destination: "/courses",
        text: "Courses",
      },
      {
        destination: "/blog",
        text: "News and Blogs",
      },
      {
        destination: "/about",
        text: "About Us",
      },
      {
        destination: "/contact",
        text: "Contact Us",
      },
    ];
  } else if (role === "student") {
    menuItem = [
      { destination: "/", text: "Home"},
      { destination: "/studentdashboard", text: "Dashboard" },
      { destination: "/leaderboard", text: "Leaderboard" },
      { destination: "/assignment", text: "Assignment" },
      { destination: "/notice", text: "Notice" },
    ];
  } else if (role === "teacher") {
    menuItem = [
      { destination: "/teacher/dashboard", text: "Dashboard" },
      { destination: "/teacher/leaderboard", text: "Leaderboard" },
      { destination: "/teacher/quiz", text: "Quiz" },
      { destination: "/teacher/assignment", text: "Assignment" },
      { destination: "/teacher/notice", text: "Notice" },
    ];
  } else if (role === "admin") {
    menuItem = [
      {
        destination: "/",
        text: "Home",
      },
      {
        destination: "/admindashboard",
        text: "Dashboard",
      },
      {
        destination: "/course",
        text: "Courses",
      }
    ];
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        {auth ? (
          <ul className="items-center hidden space-x-8 lg:flex">
            <li className="flex gap-2 items-center">
              <p className="font-medium">{name}</p>
              <button onClick={toggleDropdown}>
                <img
                  src={avater}
                  alt="avatar"
                  className="rounded-full ring-1 w-8 h-8 ring-gray-700"
                />
              </button>
            </li>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-44 bg-gray-50 w-[150px] z-50">
                <ul className="py-1">
                  <Link to="/profile">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Profile
                    </li>
                  </Link>
                  <Link to="/setting">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Setting
                    </li>
                  </Link>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
           
          </ul>
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
                  {auth ? (
                    <ul className="space-y-4">
                      {menuItem.map((item) => (
                        <NavLinkM
                          destination={item.destination}
                          text={item.text}
                        />
                      ))}
                      <li>
                        <button
                          onClick={handleLogout}
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-700 border border-cyan-700 transition duration-200 rounded shadow-md  hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  ) : (
                    <ul className="space-y-4">
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
                  )}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
