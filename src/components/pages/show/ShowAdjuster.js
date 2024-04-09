import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Cards/CardAdjuster'
import {getAllAdjuster, addAdjuster}  from "../../utils/AdjusterController";

import { Link } from 'react-router-dom'

export default function ShowAdjuster() {
    const [Adjuster,setAdjuster] = useState([]);
    useEffect(()=>{
      console.log(Adjuster);
      getAllAdjuster(setAdjuster)
      console.log(Adjuster);
    },[]);

    
    const [formData, setFormData] = useState({
      name: '',
     
      assigned_machine: '',
      status: ''
    });

  return (
    <div>
      <div className='manager '>
        <div className='container'>
        {Adjuster.map((ele,index)=>{
            return <Card key={index}  name={ele.name} assigned={ele.assigned_machine} status={ele.status}/>
        })}
        </div>

        
        <Link  style={{height: "20px", border:"2px solid black ",backgroundColor:"white" , color:'red', textDecoration:"none"}} to='/addAdjuster'>Add New Adjuster</Link>
        
        </div>
    </div>
  )
}
