import React from 'react'
import DashboardNav from '../DashboardNavbar/NavBar'



// Student panel navigation
const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Course', href: '/', current: false },
  { name: 'Quiz', href: '/', current: false },
  { name: 'Assignment', href: '/', current: false },
]


export default function DashboadLayout() {
  return (
    <DashboardNav navigation={navigation}/>
  )
}
