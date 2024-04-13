import React from 'react'
import '../../Styles/card.css'
import { useState } from 'react';
import { updateMachine } from '../../utils/MachineController';
export default function Card2({id,name,iid}) {
    const [status,setStatus] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        const data1 = {
            status : e.target.value
        }
        setStatus(e.target.value);
        console.log(data1);
        updateMachine(iid,data1,setStatus);
        alert("Status Updated");
    }
    return (
        <>
            <div className='card'>
                <div>
                    <h3>ID : {id}</h3>
                    <h3>Name : {name}</h3>
                </div>
                <div>
                <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select id="status" name="status" value={status} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Operated">operated</option>
                    <option value="NotOperated">Not Operated</option>
                    <option value="Operating">Operating</option>
                </select>
                </div>
                </div>
            </div>
        </>
    );
}
