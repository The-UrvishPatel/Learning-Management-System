import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [userType, setUserType] = useState('user');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    // await axios.post("/login")
    //     .then((response) => {
    //         console.log("Response", response);
    //         const userData = response.data;
    //         dispatch(setUserData({userData}))
    //     })
    //     .catch(err => console.log(err));
    
    console.log("User type", userType);
    dispatch(login({ userType }));
    navigate(`/${userType}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="librarian">Librarian</option>
      </select>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
