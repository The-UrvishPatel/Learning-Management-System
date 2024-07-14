import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup, setUserData } from '../../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // Import your CSS file for styling
import axios from "axios"

const Signup = () => {
  const [userType, setUserType] = useState('user');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [organization, setOrganization] = useState('');
  const [interestedIn, setInterestedIn] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignup = async () => {
    let userData = {
      name,
      phoneNumber,
      email,
      password,
      gender,
      occupation,
      organization,
      interestedIn
    };

    const res = await axios.post(`http://127.0.0.1:5000/${userType}/signup`, userData);
    console.log(res["data"])

    dispatch(signup({ userType }));
    dispatch(setUserData({ userData: res["data"] }));
    navigate('/user')
  };

  const interests = ['Coding', 'Design', 'Music', 'Reading']; // Example interests array

  const handleInterestChange = (interest) => {
    if (interestedIn.includes(interest)) {
      setInterestedIn(interestedIn.filter(item => item !== interest));
    } else {
      setInterestedIn([...interestedIn, interest]);
    }
  };

  const renderInterests = () => {
    return interests.map(interest => (
      <label
        key={interest}
        className={`interest ${interestedIn.includes(interest) ? 'selected' : ''}`}
        onClick={() => handleInterestChange(interest)}
      >
        {interest}
      </label>
    ));
  };

  const renderRoleFields = () => {
    switch (userType) {
      case 'user':
        return (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                placeholder="Enter your gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="occupation">Occupation:</label>
              <input
                type="text"
                id="occupation"
                placeholder="Enter your occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Interested In:</label>
              <div className="interests-container">
                {renderInterests()}
              </div>
            </div>
          </>
        );
      case 'admin':
        return (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                placeholder="Enter your gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                id="organization"
                placeholder="Enter your organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>
          </>
        );
      case 'librarian':
        return (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                placeholder="Enter your gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <div className="role-selection">
        <button
          className={`role-tab ${userType === 'user' ? 'active' : ''}`}
          onClick={() => setUserType('user')}
        >
          User
        </button>
        <button
          className={`role-tab ${userType === 'admin' ? 'active' : ''}`}
          onClick={() => setUserType('admin')}
        >
          Admin
        </button>
        <button
          className={`role-tab ${userType === 'librarian' ? 'active' : ''}`}
          onClick={() => setUserType('librarian')}
        >
          Librarian
        </button>
      </div>
      <div className="role-fields">
        {renderRoleFields()}
      </div>
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
