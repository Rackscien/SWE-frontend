import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Cards/CardAdjuster'
import {getAllAdjuster, addAdjuster}  from "../../utils/AdjusterController";

import { Link } from 'react-router-dom'

export default function ShowAdjuster1() {
  const [Adjuster,setAdjuster] = useState([]);
    useEffect(()=>{
      console.log(Adjuster);
      getAllAdjuster(setAdjuster)
      console.log(Adjuster);
    },[]);

  return (
    <div>
      <div className='manager '>
        <div className='container'>
        {Adjuster.map((ele,index)=>{
            return <Card key={index}  name={ele.name} status={ele.status}/>
        })}
        </div>

        
        
        </div>
    </div>
  )
}
