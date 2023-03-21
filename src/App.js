import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { Route, Routes } from "react-router-dom";
import Error from "./components/common/Error";
import DashboardLayout from "./components/Dashboard/Layout/DashboardLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard/*" element={<DashboardLayout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
