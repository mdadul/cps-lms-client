import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import CourseDetails from "./components/CoursesPage/CourseDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import Leader from "./components/StudentDashboard/Leader";
import AddCourse from "./components/AdminDashboard/AddCourse";
import UpdateCourse from "./components/AdminDashboard/UpdateCourse";
import { ToastContainer } from "react-toastify";
import AddAssignmnet from "./components/Assignment/AddAssignmnet";
import Assignment from "./components/Assignment/Assignment";
import StudentList from "./components/AdminDashboard/Students";
import Course from "./components/AdminDashboard/AllCourse";
import Error from "./components/common/Error";
import Teachers from "./components/AdminDashboard/Teachers";
import Setting from "./components/AdminDashboard/Setting";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/details" element={<CourseDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/studentdashboard/" element={<StudentDashboard />} />
        <Route path="/leaderboard" element={<Leader />} />

        <Route path="/assignment" element={<AddAssignmnet />} />
        <Route path="/assignment/:id" element={<Assignment />} />
        


        {/* admin dashboard */}
        <Route path="/course" element={<Course />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/updatecourse/:id" element={<UpdateCourse />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/teacherlist" element={<Teachers />} />
        <Route path="/setting" element={<Setting/>}/>

        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
