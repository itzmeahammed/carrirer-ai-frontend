import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"; // Import Navigate to handle redirection
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/login"; // Correct import for LoginForm
import ChatBot from "./components/ChatBot";
import ToDoList from "./components/todoList";
import CareerNews from "./components/CareerNews";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the JWT token exists in localStorage
    const token = localStorage.getItem("token");

    // If no token exists, redirect to login
    if (!token) {
      navigate("/login");
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className='App'>
      <Routes>
        {/* Route for Login */}
        <Route path='/login' element={<LoginForm />} />{" "}
        {/* Route to LoginForm */}
        {/* Route for Signup */}
        <Route path='/signup' element={<SignupForm />} />{" "}
        {/* Route to SignupForm */}
        {/* After login, show the ChatBot */}
        <Route path='/dashboard' element={<ChatBot />} />{" "}
        {/* Route to ChatBot */}
        {/* Default route goes to login */}
        <Route path='/' element={<LoginForm />} /> {/* Redirect to LoginForm */}
        {/* Route for ToDoList */}
        <Route path='/todolist' element={<ToDoList />} />
        {/* Route for CareerNews */}
        <Route path='/careernews' element={<CareerNews />} />
      </Routes>
    </div>
  );
}

export default App;
