import React from "react";
import Layout from "../components/common/Layout";
import AllCourses from "../components/CoursesPage/AllCourses";
import Search from "../components/CoursesPage/Search";
import CoursePromotion from "../components/Branding/CoursePromotion";
export default function Course() {
  return (
    <Layout>
      <Search />
       <AllCourses/>
      <CoursePromotion/>
    </Layout>
  );
}
