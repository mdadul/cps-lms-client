import React from 'react'
import Layout from '../components/common/Layout'
import Hero from '../components/ProjectSolution/Hero/Hero'
import Services from '../components/ProjectSolution/Services/Services'
import Testimonials from '../components/ProjectSolution/Testimonials/Testimonials'

export default function ProjectSolution() {
  return (
   <Layout>
    <Hero/>
    <Services/>
    <Testimonials/>
   </Layout>
  )
}
