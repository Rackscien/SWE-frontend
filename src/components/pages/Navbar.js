import React from 'react'
import '../Styles/navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    
    <div className='navbar'>
      <div>
        <Link to="/" style={{color:'black', textDecoration:"none"}}>SIMULATION SOFTWARE</Link>
      </div>
      <div>
        <div><Link  style={{color:'black', textDecoration:"none"}} to='/login'>login</Link></div>
      </div>
    </div>
  )
}
