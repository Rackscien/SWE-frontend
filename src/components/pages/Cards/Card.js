import React from 'react'
import '../../Styles/card.css'

export default function Card({id,name,adjuster,status}) {
  return (
    <>
      <div key={id} className='card'>
        <div>
            <h3>ID : {id}</h3>
            <h3>Name : {name}</h3>
        </div>
        <div>
            <p>Assigned to Adjuster : {adjuster}</p>
            <p>Status : {status}</p>
        </div>


      </div>
    </>
  )
}
