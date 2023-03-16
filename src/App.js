import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./components/common/Error";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
