import React from 'react'
import Layout from './Layout'
import Profile from '../Profile/Profile'
import Auth from '../../Hooks/Auth';

export default function Setting() {
  const Authentication =  Auth();
  const role = Authentication.user?.role

  if(!Authentication || role !== "admin"){
    window.location.href="/signin"
  }

  return (
    <Layout>
    
        <Profile/>
    </Layout>
  )
}
