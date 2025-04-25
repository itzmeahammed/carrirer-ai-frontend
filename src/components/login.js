// src/components/LoginForm.js
import React, { useState } from "react";
import axios from "../axios";
import { Link, useNavigate } from "react-router-dom"; // To navigate to Signup page
import "./LoginForm.css";

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending user credentials to the backend for authentication
      const response = await axios.post(
        "http://localhost:6777/login",
        userDetails
      ); // Backend URL

      // If login is successful, store the JWT token and user ID
      const { token, user_id } = response.data;

      // Store the JWT token and user ID in localStorage (or any other storage mechanism)
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", user_id);

      alert(response.data.message); // Show success message
      // Optionally, navigate to a protected route
      // history.push("/dashboard");  // Example of redirecting to a dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in", error);
      alert("Invalid credentials or an error occurred during login.");
    }
  };

  return (
    <div className='login-container'>
      <div className='left-side'>
        <h1 className='app-name'>Career Path AI</h1>
        <p className='quote'>"Your career journey begins here."</p>
      </div>
      <div className='right-side'>
        <div className='login-card'>
          <h1>Login to Career Path AI</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-field'>
              <input
                type='email'
                name='email'
                value={userDetails.email}
                onChange={handleChange}
                placeholder='Email Address'
                required
              />
            </div>
            <div className='form-field'>
              <input
                type='password'
                name='password'
                value={userDetails.password}
                onChange={handleChange}
                placeholder='Password'
                required
              />
            </div>
            <div className='form-field'>
              <button type='submit' className='btn-primary'>
                Login
              </button>
            </div>
          </form>
          <div className='signup-link'>
            <p>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
