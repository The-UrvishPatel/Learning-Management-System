import React, { useState, useEffect } from 'react';
import Report from './utils/Report';
import CreateLibrary from './utils/CreateLibrary';
import AddLibrarian from './utils/AddLibrarian';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('addlibrarian');
  const [userData, setUserData] = useState({
    image: "https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0",
    name: "John Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    gender: "Software Engineer",
    organization: "Org",    
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://api.example.com/user-data/"); // Replace with your actual API endpoint
        const userDataFromApi = response.data; // Assuming the API response is an object with user data
        setUserData(userDataFromApi);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'addlibrarian':
        return <AddLibrarian />;
      case 'createlibrary':
        return <CreateLibrary />;
      case 'report':
        return <Report />;
      default:
        return null;
    }
  };

  return (
    <div className="main-div">
      <div className="hello">
        <div className="user-details">
          <div className="user-details__item">
            <label>Image:</label>
            <div>
              <img src={userData.image} alt="User" className="user-details__image" />
            </div>
          </div>
          <div className="user-details__item">
            <label>Name:</label>
            <div>{userData.name}</div>
          </div>
          <div className="user-details__item">
            <label>Contact:</label>
            <div>{userData.phoneNumber}</div>
          </div>
          <div className="user-details__item">
            <label>Email:</label>
            <div>{userData.email}</div>
          </div>
          <div className="user-details__item">
            <label>Gender:</label>
            <div>{userData.gender}</div>
          </div>
          <div className="user-details__item">
            <label>Organization:</label>
            <div>{userData.organization}</div>
          </div>
        </div>
      </div>
      <div className="nav-tabs-above">
        <div className="nav-tabs hidden-scrollbar">
        <a 
          href="#addlibrarian" 
          className={activeTab === 'addlibrarian' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('addlibrarian')}
        >
          Add Librarian
        </a>
        <a 
          href="#createlibrary" 
          className={activeTab === 'createlibrary' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('createlibrary')}
        >
          Create Library
        </a>
        <a 
          href="#report" 
          className={activeTab === 'report' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('report')}
        >
          Report
        </a>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
