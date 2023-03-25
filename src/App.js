import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { Route, Routes } from "react-router-dom";
import Error from "./components/common/Error";
import DashboardLayout from "./components/Dashboard/Layout/DashboardLayout";
import CourseDetails from "./components/CoursesPage/CourseDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses/details" element={<CourseDetails />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard/*" element={<DashboardLayout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
