import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDashboard.css";
import Report from "./utils/Report";
import Books from "./utils/Books";
import BorrowedBooks from "./utils/BorrowedBooks";
import OverdueBooks from "./utils/OverdueBooks";
import { useSelector } from "react-redux";


const UserDashboard = () => {
//   const [userData, setUserData] = useState({
//     image: "https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0",
//     name: "John Doe",
//     phoneNumber: "123-456-7890",
//     email: "john.doe@example.com",
//     gender: "Software Engineer",
//     occupation: "Software Engineer",
//     interestedIn: ["a", "b"]
//   });
  const [activeTab, setActiveTab] = useState("books");

  const userData = useSelector(state => state.auth.userData);
  const renderContent = () => {
    switch (activeTab) {
      case "borrowedbooks":
        return <BorrowedBooks />;
      case "report":
        return <Report />;
      case "overduebooks":
        return <OverdueBooks />;
      case "books":
        return <Books />;
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
              <img src={`https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0`} alt="User" className="user-details__image" />
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
            <label>Occupation:</label>
            <div>{userData.occupation}</div>
          </div>
          <div className="user-details__item">
            <label>Gender:</label>
            <div>{userData.gender}</div>
          </div>
          <div className="user-details__item">
            <label>Your Interest:</label>
            <div>{userData.interestedIn.join(', ')}</div>
          </div>
        </div>
      </div>
      <div className="nav-tabs-above">
        <div className="nav-tabs hidden-scrollbar">
          <a
            href="#books"
            className={activeTab === "books" ? "active-tab" : ""}
            onClick={() => setActiveTab("books")}
          >
            Books
          </a>
          <a
            href="#borrowedbooks"
            className={activeTab === "borrowedbooks" ? "active-tab" : ""}
            onClick={() => setActiveTab("borrowedbooks")}
          >
            Borrowed Books
          </a>
          <a
            href="#overduebooks"
            className={activeTab === "overduebooks" ? "active-tab" : ""}
            onClick={() => setActiveTab("overduebooks")}
          >
            OverDue Books
          </a>
          <a
            href="#report"
            className={activeTab === "report" ? "active-tab" : ""}
            onClick={() => setActiveTab("report")}
          >
            Report
          </a>
        </div>
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default UserDashboard;
