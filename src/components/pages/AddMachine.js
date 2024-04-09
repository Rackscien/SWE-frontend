import React from 'react'
import { useState,useEffect } from 'react';
import {getAllMachine, addMachine}  from "../utils/MachineController";
import '../Styles/AddMachine.css'


export default function AddMachine() {
    const [machine,setMachine] = useState([]);
  useEffect(()=>{
    getAllMachine(setMachine)
    console.log(machine);
  },[])
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    assignedToAdjuster: '',
    status: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addMachine(formData,setFormData,setMachine);
    alert("Machine Added");

  };
  return (
    <div className='formAdd'>
      <div className="form-container">
        <div className='formCont1'>
          <h2>Machine Form</h2>
        </div>
      <div className='formCont2'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Machine ID:</label>
          <input type="text" id="id" name="id" value={formData.machineId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Machine Name:</label>
          <input type="text" id="name" name="name" value={formData.machineName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="assignedToAdjuster">Assigned To (Adjuster):</label>
          <input type="text" id="assignedToAdjuster" name="assignedToAdjuster" value={formData.assignedTo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={formData.status} onChange={handleChange} required>
            <option value="NotOperated">Select</option>
            <option value="Operated">operated</option>
            <option value="NotOperated">Not Operated</option>
            <option value="Operating">Operating</option>
          </select>
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}
