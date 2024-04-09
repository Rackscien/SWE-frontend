import React from 'react'
import { useState, useEffect } from 'react';
import '../Styles/manager.css'
import Card from './Cards/Card'
import {getAllMachine, addMachine}  from "../utils/MachineController";

import { Link } from 'react-router-dom';


export default function Manager() {
  const [machine,setMachine] = useState([]);
    useEffect(()=>{
      console.log(machine);
      getAllMachine(setMachine)
      console.log(machine);
    },[]);

    
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      assignedToAdjuster: '',
      status: ''
    });

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({
    //     ...formData,
    //     [name]: value
    //   });
    //   console.log(formData);
    // };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   addMachine(formData,setFormData,setMachine)
    // };
    // const {modal,setModal}=useState(false);

  return (
    
    <div className='manager '>
      <div className='container'>
      {machine.map((ele)=>{
        return <Card key={ele.id} id={ele.id} name={ele.name} adjuster={ele.assignedToAdjuster} status={ele.status}/>
      })}
      </div>

      
      <Link  style={{height: "20px", border:"2px solid black ",backgroundColor:"white" , color:'red', textDecoration:"none"}} to='/addMachine'>Add New Machine</Link>
      
    </div>
  )
}
