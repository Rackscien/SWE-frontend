import React from 'react'
import { useState,useEffect } from 'react';
import {getAllAdjuster, addAdjuster}  from "../utils/AdjusterController";
import '../Styles/AddAdjuster.css'

export default function AddAdjuster() {
    const [Adjuster,setAdjuster] = useState([]);
    useEffect(()=>{
      getAllAdjuster(setAdjuster)
      console.log(Adjuster);
    },[])
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      assigned_machine: '',
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
      addAdjuster(formData,setFormData,setAdjuster);
      alert("Adjuster Added");
  
    };
    return (
      <div className='formAdd'>
        <div className="form-container">
          <div className='formCont1'>
            <h2>Adjuster Form</h2>
          </div>
        <div className='formCont2'>
        <form onSubmit={handleSubmit}>
         
          <div className="form-group">
            <label htmlFor="name">Adjuster Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
           {/* <div className="form-group">
            <label htmlFor="id">Adjuster ID:</label>
            <input type="text" id="id" name="id" value={formData.AdjusterId} onChange={handleChange} required />
          </div> */}
          <div className="form-group">
            <label htmlFor="assigned_machine">Assigned To (Adjuster):</label>
            <input type="text" id="assigned_machine" name="assigned_machine" value={formData.assigned_machine} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange} required>
              <option value="NotWorking">Select</option>
              <option value="Working">Working</option>
              <option value="NotWorking">Not Working</option>
              {/* <option value="Operating">Operating</option> */}
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
