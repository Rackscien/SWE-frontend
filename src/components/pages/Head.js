import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/head.css'


export default function Head() {
  return (
    <div className='headM'>
       <div className='machine'>
          <Link to="/showMachine" style={{color:'black', textDecoration:"none"}}>MACHINE</Link>
       </div>
       <div className='adjuster'>
          <Link to="/showAdjuster" style={{color:'black', textDecoration:"none"}}> ADJUSTER</Link>
         
       </div>
       <div className='showSt'>
       <Link to="/showStatistics" style={{color:'black', textDecoration:"none" , textTransform: "capitalize"}}>SHOW STATISTICS</Link>
          
       </div>
    </div>
  )
}
