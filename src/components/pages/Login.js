import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css'
import { getAllUser } from '../utils/UserController';
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [type,setType]=useState('User');
  
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [user,setUser] = useState([]);
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  useEffect(()=>{
    getAllUser(setUser);
    console.log(user);
  },[])
  const handleLogin = () => {
    if(user.length === 0){
      alert('no user found');
      navigate('/login');
    }
    const data = user.filter((ele)=> ele.email === email && ele.type === type && ele.password === password);
    if(data.length === 0){
      alert('no user found');
      navigate('/login');
    }
    else{
      alert('Successful Login');
      if(type === 'Head'){
        navigate('/head')
      }
      else if(type === 'Manager'){
        navigate('/manager')
      }
      else if(type === 'Adjuster'){
        navigate('/adjuster',{state:{name,email,type}})
      }
      else{
        navigate('/showMachine')
      }
    }
    
  };


  return (
    <div className='mainF'>
    <div className='form'>
        <h2>Login</h2>
        <div>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
              required
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
        </div>
        <div>

        <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
            required
          >
            <option value="User">User</option>
            <option value="Head">Head</option>
            <option value="Manager">Manager</option>
            <option value="Adjuster">Adjuster</option>
          </select>

            {/* <label htmlFor="type">Password:</label>
            <input
            type="type"
            id="type"
            value={password}
            onChange={handlePasswordChange}
            /> */}
        </div>
        <div className='b'>
            <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      </div>
  );
};

export default Login;
