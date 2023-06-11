import React from 'react'
import logo from '../../img/logo/PS-Logo.png'
export default function Loader() {
  return (
    <div className="fixed top-[49vh] left-[49vw]">
        <img src={logo} alt="logo" className='w-14 h-16'/>
    </div>
  )
}
