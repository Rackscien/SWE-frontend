import axios from "axios";

const baseurl = process.env.User_url || "http://localhost:8000/api/user";

const getAllUser = (setUser) => {
    axios.get(baseurl)
    .then(({data})=>{
        console.log(data);
        setUser(data);
    })
    .catch((err)=>console.log(err));
}
const addUser = (data,setData,setUser) => {
    // console.log("User.js",data);
    axios.post(baseurl,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("")
        getAllUser(setUser)
    })
    .catch((err)=> console.log(err))
}
const updateUser = (UserId,data,setData,setUser) => {
    axios.put(baseurl,{id : UserId,data})
    .then((ele)=>{
        console.log(ele);
        setData("")
        getAllUser(setUser)
    })
    .catch((err) => console.log(err));
}
const deleteUser = (id,setUser) =>{
    axios.post(baseurl,{id})
    .then(() => {
        getAllUser(setUser);
    })
    .catch((err) => console.log(err));
}
export {
    getAllUser,
    addUser,
    updateUser,
    deleteUser
}