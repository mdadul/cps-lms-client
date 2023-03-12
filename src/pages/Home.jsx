import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { Statistic } from '../components/Stat'

export default function Home() {
  return (
    <Layout>
        <Hero/>
        <Statistic/>
    </Layout>
  )
}
