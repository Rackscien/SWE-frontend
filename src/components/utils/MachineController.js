import axios from "axios";

const baseurl = process.env.machine_url || "https://swe-backend-n3rd.onrender.com/api/machine";

const getAllMachine = (setMachine) => {
    axios.get(baseurl)
    .then(({data})=>{
        // console.log(data);
        setMachine(data);
    })
    .catch((err)=>console.log(err));
}
const addMachine = (data,setData,setMachine) => {
    // console.log("machine.js",data);
    axios.post(baseurl,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("")
        getAllMachine(setMachine)
    })
    .catch((err)=> console.log(err))
}
const updateMachine = (machineId,data,setData) => {
    axios.patch(`${baseurl}/${machineId}`,data)
    .then(({ele})=>{
        console.log(ele);
        setData("")
        // getAllMachine(setMachine)
    })
    .catch((err) => console.log(err));
}
const deleteMachine = (id,setMachine) =>{
    axios.post(baseurl,{id})
    .then(() => {
        getAllMachine(setMachine);
    })
    .catch((err) => console.log(err));
}
export {
    getAllMachine,
    addMachine,
    updateMachine,
    deleteMachine
}