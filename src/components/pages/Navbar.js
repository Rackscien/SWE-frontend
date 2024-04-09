import React from 'react'
import '../Styles/navbar.css'
import { Link } from 'react-router-dom'
import Back_button from '../assets/back_button.png'


export default function Navbar() {
  return (
    
    <div className='navbar'>
      <div>
        <Link to="/"><img src={Back_button} alt='Back'/></Link>
      </div>
      <div>
        <div><Link  style={{color:'black', textDecoration:"none"}} to='/login'>login</Link></div>
        {/* <div><Link style={{color:'black', textDecoration:"none"}} to='/register'>register</Link></div> */}
      </div>
    </div>
  )
}
