import React from "react";
import Layout from "../components/common/Layout";
import AllCourses from "../components/CoursesPage/AllCourses";
import Faq from "../components/HomePage/Faq";
import Features from "../components/HomePage/Features/Features";
import Hero from "../components/HomePage/Hero";
import Slider from "../components/HomePage/Testimonial/Slider";
import Subscribe from "../components/Subscribe/Subscribe";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AllCourses/>
      <Features />
      <Slider />
      <Faq />
      <Subscribe/>
    </Layout>
  );
}
