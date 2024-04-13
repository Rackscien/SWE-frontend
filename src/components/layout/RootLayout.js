import React from 'react'
import Navbar from '../pages/Navbar'
import {Outlet} from 'react-router-dom'
export default function RootLayout() {
  return (
    <div>
      <div className='root-layout back'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
