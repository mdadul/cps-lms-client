import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";import StudentDashboard from "./components/StudentDashboard/Dashboard";
import AddCourse from "./components/AdminDashboard/AddCourse";
import UpdateCourse from "./components/AdminDashboard/UpdateCourse";
import { ToastContainer } from "react-toastify";
import Assignment from "./components/AdminDashboard/Assignment";
import StudentList from "./components/AdminDashboard/Students";
import Course from "./components/AdminDashboard/AllCourse";
import Error from "./components/common/Error";
import Setting from "./components/AdminDashboard/Setting";
import UpdateUser from "./components/AdminDashboard/UpdateUser";
import Stat from "./components/AdminDashboard/Stat";
import AdminOutlet from "./components/AdminOutlet";
import PrivateOutlet from "./components/PrivateOutlet";
import StudentOutlet from "./components/StudentOutlet";
import UserList from "./components/AdminDashboard/UsersList";
import Profile from "./components/Profile/Profile";
import CourseDetail from "./components/AdminDashboard/CourseDetails";
import Content from "./components/AdminDashboard/Content";
import Syllabus from "./components/AdminDashboard/Syllabus";
import Notice from "./components/AdminDashboard/Notice";
import TeacherList from "./components/AdminDashboard/Teachers";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import AddContent from "./components/AdminDashboard/Content/AddContent";
import Details from "./components/CoursesPage/Details";
import Curriculum from "./components/CoursesPage/Curriculum";
import Enroll from "./components/Enroll/Enroll";
import EnrolledStudents from "./components/AdminDashboard/Enrolled/EnrolledList";
import UpdateEnrollStatus from "./components/AdminDashboard/Enrolled/UpdateEnrollStatus";
import Teacher from "./components/AdminDashboard/Teacher/Teacher";
import CourseContent from "./components/StudentDashboard/CourseContent";
import Video from "./components/StudentDashboard/Video";
import ViewAssignment from "./components/StudentDashboard/ViewAssignment";
import AssignmentDetails from "./components/StudentDashboard/AssignmentDetails";
import ALLNotice from "./components/StudentDashboard/AllNotice";
import NoticeDetails from './components/StudentDashboard/NoticeDetails'
function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/description/:id" element={<Details />} />
          <Route path="/courses/curriculum/:id" element={<Curriculum />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
            <Route path="enroll/:id" element={<Enroll />} />
          </Route>

          <Route path="/*" element={<AdminOutlet />}>
            <Route path="admindashboard" element={<Stat />} />
            <Route path="course" element={<Course />} />
            <Route path="addcourse" element={<AddCourse />} />
            <Route path="updatecourse/:id" element={<UpdateCourse />} />
            <Route path="studentlist" element={<StudentList />} />
            <Route path="teacherlist" element={<TeacherList />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="course/content/:id" element={<Content />} />
            <Route path="course/syllabus/:id" element={<Syllabus />} />
            <Route path="course/notice/:id" element={<Notice />} />
            <Route path="course/assignment/:id" element={<Assignment />} />
            <Route path="course/content/add" element={<AddContent />} />
            <Route path="users/edit/:id" element={<UpdateUser />} />
            <Route path="course/enroll/:id" element={<EnrolledStudents />} />
            <Route path="course/enroll/edit/:id" element={<UpdateEnrollStatus />} />
            <Route path="course/teacher/:id" element={<Teacher />} />
          </Route>

          <Route path="/*" element={<StudentOutlet />}>
            <Route path="studentdashboard" element={<StudentDashboard />}/>
            <Route path="student/course/:id" element={<CourseContent/>} />
            <Route path="student/course/content/:id" element={<Video/>}/>
            <Route path="student/course/assignemnt/:id" element={<ViewAssignment/>}/>
            <Route path="assignment/details/:id" element={<AssignmentDetails/>}/>
            <Route path="student/course/notice/:id" element={<ALLNotice/>}/>
            <Route path="notice/details/:id" element={<NoticeDetails/>}/>
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
