import React , {useState, useEffect} from 'react'
import Card1 from '../Cards/Card1'
import {getAllMachine }  from "../../utils/MachineController";

export default function ShowMachine1() {
    const [machine,setMachine] = useState([]);
    useEffect(()=>{
      getAllMachine(setMachine)
      console.log(machine);
    },[]);

  return (
    <div>
      <div className='manager '>
        <div className='container'>
            {machine.map((ele)=>{
                return <Card1 key={ele.id} iid={ele._id} id={ele.id} name={ele.name} status={ele.status}/>
            })}
        </div>
      </div>
    </div>
  )
}
