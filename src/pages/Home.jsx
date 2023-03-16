import React from 'react'
import Layout from '../components/common/Layout'
import Faq from '../components/HomePage/Faq'
import FeatureCard from '../components/HomePage/Features/FeatureCard'
import Hero from '../components/HomePage/Hero'
import Slider from '../components/HomePage/Testimonial/Slider'

export default function Home() {
  return (
    <Layout>
        <Hero/>
        <FeatureCard/>
        <Slider/>
        <Faq/>
    </Layout>
  )
}
