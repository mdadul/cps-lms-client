import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div className='flex gap-20 '>
        <Sidebar/>
        {children}
    </div>
  )
}
