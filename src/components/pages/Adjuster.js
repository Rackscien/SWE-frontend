import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getAllAdjuster, updateAdjuster } from '../utils/AdjusterController';
import '../Styles/head.css'
export default function Adjuster() {
   const [adjuster,setAdjuster] = useState([]);
   const [status,setStatus] = useState('')
  const data = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
   getAllAdjuster(setAdjuster);
   console.log(adjuster);
  },[])
  const onead = adjuster.filter((ele)=> ele.name === data.state?.name);
  console.log(onead);
  const handleChange = (e) => {
   setStatus(e.target.value)
 };
 const handleSubmit = (e) => {
   e.preventDefault();
   const data1 = {
      status
   }
   console.log(data1);
   if(onead[0]?._id){
      updateAdjuster(onead[0]._id,data1,setStatus,setAdjuster);
      alert("Status Updated");
   }
   else{
      alert("server error");
   }
 };
 const handleClick =()=>{
   navigate('/assignedmachine',{state:{name:onead[0]?.name}})
 }
  return (
    <div className='head1'>
       <div className='machine'>
          <p>Hello {onead[0]?.name} Change your Status</p>
          <div>
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="status">Status:</label>
                  <select id="status" name="status" value={status} onChange={handleChange} required>
                     <option value="">Select</option>
                     <option value="Working">Working</option>
                     <option value="NotWorking">Not Working</option>
                  </select>
               </div>
               <div>
                  <button type="submit">Submit</button>
               </div>
            </form>
          </div>
       </div> 
       <div className='machine'>
          <div onClick={handleClick} style={{color:'black', textDecoration:"none", cursor:"pointer"}}>Update machine</div>
       </div>
    </div>
  )
}


