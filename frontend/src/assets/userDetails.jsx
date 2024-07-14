import React, { useState } from 'react';
// import './UserDetails.css'; // Import the CSS file

const UserDetails = () => {
  const [image, setImage] = useState('https://via.placeholder.com/100'); // Dummy image URL
  const [name, setName] = useState('John Doe'); // Dummy name
  const [contact, setContact] = useState('123-456-7890'); // Dummy contact
  const [email, setEmail] = useState('john.doe@example.com'); // Dummy email
  const [address, setAddress] = useState('123 Main St, Springfield'); // Dummy address
  const [jobTitle, setJobTitle] = useState('Software Engineer'); // Dummy job title

  return (
    <div className="user-details">
      <div className="user-details__item">
        <label>Image:</label>
        <div>
          <img src={image} alt="User" className="user-details__image" />
        </div>
      </div>
      <div className="user-details__item">
        <label>Name:</label>
        <div>{name}</div>
      </div>
      <div className="user-details__item">
        <label>Contact:</label>
        <div>{contact}</div>
      </div>
      <div className="user-details__item">
        <label>Email:</label>
        <div>{email}</div>
      </div>
      <div className="user-details__item">
        <label>Address:</label>
        <div>{address}</div>
      </div>
      <div className="user-details__item">
        <label>Job Title:</label>
        <div>{jobTitle}</div>
      </div>
    </div>
  );
};

export default UserDetails;