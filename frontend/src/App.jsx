import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import LibrarianDashboard from './components/Librarian/LibrarianDashboard';
import './App.css';

const App = () => {

  const userType = useSelector((state) => state.auth.userType);

  return (
    <Router>
      <div className="app">
        {!userType ? (
          <div className="auth-container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </div>
        ) : (
          <>
            <div className="main-content">
              <Routes>
                <Route path="/user" element={<UserDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/librarian" element={<LibrarianDashboard />} />
                <Route path="/" element={<UserDashboard />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
