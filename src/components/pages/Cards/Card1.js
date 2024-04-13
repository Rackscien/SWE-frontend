import React from 'react'
import '../../Styles/card.css'
import { useState,useEffect } from 'react';
import { getAllAdjuster } from '../../utils/AdjusterController';
import { updateMachine } from '../../utils/MachineController';
export default function Card1({id,name,iid,status}) {
    const [adjusters, setAdjusters] = useState([]);
    const [data, setData] = useState({
        assignedToAdjuster : ''
    });

    useEffect(() => {
        // Fetch adjusters from the backend API when the component mounts
        getAllAdjuster(setAdjusters);
        console.log(adjusters);
    }, []);
    const handleChange = (e) => {
        e.preventDefault();
        const data1 = {
            assignedToAdjuster : e.target.value
        }
        setData(data1);
        console.log(data1);
        updateMachine(iid,data1,setData);
        alert("adjuster assigned");
    }
    return (
        <>
            <div className='card'>
                <div>
                    <h3>ID : {id}</h3>
                    <h3>Name : {name}</h3>
                </div>
                <div>
                    <h3>Adjuster :
                        <select
                            value={data.assignedToAdjuster}
                            onChange={handleChange}
                        >
                            <option value="">Select Adjuster</option>
                            {adjusters.map((adjuster) => (
                                <option key={adjuster._id} value={adjuster.name}>
                                    {adjuster.name}
                                </option>
                            ))}
                        </select>
                    </h3>
                    <p>Status : {status}</p>
                </div>
            </div>
        </>
    );
}
