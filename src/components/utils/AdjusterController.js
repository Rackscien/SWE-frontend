import axios from "axios";

const baseurl = process.env.Adjuster_url || "http://localhost:8000/api/adjuster";

const getAllAdjuster = (setAdjuster) => {
    axios.get(baseurl)
    .then(({data})=>{
        // console.log(data);
        setAdjuster(data);
    })
    .catch((err)=>console.log(err));
}
const addAdjuster = (data,setData,setAdjuster) => {
    // console.log("Adjuster.js",data);
    axios.post(baseurl,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("")
        getAllAdjuster(setAdjuster)
    })
    .catch((err)=> console.log(err))
}
const updateAdjuster = (AdjusterId,data,setData,setAdjuster) => {
    axios.put(baseurl,{id : AdjusterId,data})
    .then((ele)=>{
        console.log(ele);
        setData("")
        getAllAdjuster(setAdjuster)
    })
    .catch((err) => console.log(err));
}
const deleteAdjuster = (id,setAdjuster) =>{
    axios.post(baseurl,{id})
    .then(() => {
        getAllAdjuster(setAdjuster);
    })
    .catch((err) => console.log(err));
}
export {
    getAllAdjuster,
    addAdjuster,
    updateAdjuster,
    deleteAdjuster
}