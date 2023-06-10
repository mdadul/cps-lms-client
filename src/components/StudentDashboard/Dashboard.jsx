import React from 'react'
import Layout from '../AdminDashboard/Layout'
import StatCard from '../AdminDashboard/StatCard'
export default function Dashboard() {
  return (
    <Layout>
        <StatCard title="Enrolled Courses" value="5" />
    </Layout>
  )
}
