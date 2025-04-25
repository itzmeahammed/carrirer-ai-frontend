// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaRegListAlt,
  FaRobot,
  FaSignOutAlt,
} from "react-icons/fa"; // Importing icons
import "./Sidebar.css"; // Import styles for the sidebar

const Sidebar = () => {
  const handleSignout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };
  return (
    <div className='sidebar'>
      <h2 className='app-name'>Career Path AI</h2>
      <div className='sidebar-buttons'>
        <Link to='/dashboard' className='sidebar-button'>
          <FaRobot className='icon' />
          <span>AI Assistant</span>
        </Link>
        <Link to='/todolist' className='sidebar-button'>
          <FaRegListAlt className='icon' />
          <span>Add Task</span>
        </Link>
        <Link to='/careernews' className='sidebar-button'>
          <FaNewspaper className='icon' />
          <span>Career News</span>
        </Link>
      </div>
      {/* Logout Button */}
      <div
        className='logout-button-container'
        style={{ marginBottom: "30px" }}
        onClick={() => handleSignout()}
      >
        <Link to='/login' className='sidebar-button logout-button'>
          <FaSignOutAlt className='icon' />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
