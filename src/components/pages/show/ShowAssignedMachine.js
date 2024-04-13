import React , {useState, useEffect} from 'react'
import Card2 from '../Cards/Card2'
import {getAllMachine }  from "../../utils/MachineController";
import '../../Styles/head.css'
import { useLocation } from 'react-router-dom';
export default function ShowAssignedMachine() {
  const data = useLocation();
  const lp = data.state?.name; 
  const [machine,setMachine] = useState([]);
    useEffect(()=>{
      getAllMachine(setMachine)
    },[]);
  return (
    <div>
      <div className='head1 head2'>
        ASSIGNED MACHINE
      </div>
      <div className='manager'>
        <div className='container'>
            {machine.filter((data)=> data.assignedToAdjuster === lp).map((ele)=>{
              return <Card2 key={ele.id} iid={ele._id} id={ele.id} name={ele.name}/>
            })}
        </div>
      </div>
    </div>
  )
}
