import React from 'react'
import '../../Styles/cardAdjuster.css'

export default function CardAdjuster({name,asigned,status}) {
  return (
    <div>
      <div  className='cardA'>
        <div>
            {/* <h3>ID : {id}</h3> */}
            <h3>Name : {name}</h3>
        </div>
        <div>
            <p>Assigned Machine : {asigned}</p>
            <p>Status : {status}</p>
        </div>


      </div>
    </div>
  )
}

