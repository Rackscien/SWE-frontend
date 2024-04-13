import React from 'react'
import { useState, useEffect } from 'react';
import '../Styles/manager.css'
import Card from './Cards/Card'
import {getAllMachine, addMachine}  from "../utils/MachineController";

import { Link, Outlet } from 'react-router-dom';


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
    
    <div className='headM'>
       <div className='machine'>
          <Link to="/showMachine1" style={{color:'black', textDecoration:"none"}}>MACHINE</Link>
       </div>
       <div className='adjuster'>
          <Link to="/showAdjuster1" style={{color:'black', textDecoration:"none"}}> ADJUSTER</Link>
       </div>
    </div>
  )
}
