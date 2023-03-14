import React from 'react'
import Layout from '../components/common/Layout'
import Faq from '../components/HomePage/Faq'
import Hero from '../components/HomePage/Hero'
import Slider from '../components/HomePage/Slider'

export default function Home() {
  return (
    <Layout>
        <Hero/>
        <Slider/>
        <Faq/>
    </Layout>
  )
}
