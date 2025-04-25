import React, { useState } from "react";
import axios from "../axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignupForm.css";

const SignupForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    qualification: "",
    location: "",
    dob: "",
    gender: "",
    skills: "",
    career_interests: "",
    experience_level: "",
    work_preferences: "",
    personality_traits: "",
    education_level: "",
    languages_spoken: "",
    hobbies: "",
    past_experience: "",
    salary_expectations: "",
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
      const response = await axios.post(
        "http://localhost:6777/signup",
        userDetails
      ); // Added the full URL
      alert(response.data.message); // Display the response message
      navigate("/login");
    } catch (error) {
      console.error("Error signing up", error); // Handle any errors
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-card'>
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          {/* Name and Email */}
          <div className='form-row'>
            <div className='form-field'>
              <input
                type='text'
                name='name'
                value={userDetails.name}
                onChange={handleChange}
                placeholder='Full Name'
                required
              />
            </div>
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
          </div>

          {/* Password and Mobile */}
          <div className='form-row'>
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
              <input
                type='text'
                name='mobile'
                value={userDetails.mobile}
                onChange={handleChange}
                placeholder='Mobile Number'
                required
              />
            </div>
          </div>

          {/* Qualification and Location */}
          <div className='form-row'>
            <div className='form-field'>
              <input
                type='text'
                name='qualification'
                value={userDetails.qualification}
                onChange={handleChange}
                placeholder='Qualification'
              />
            </div>
            <div className='form-field'>
              <input
                type='text'
                name='location'
                value={userDetails.location}
                onChange={handleChange}
                placeholder='Location'
              />
            </div>
          </div>

          {/* Date of Birth and Gender */}
          <div className='form-row'>
            <div className='form-field'>
              <input
                type='date'
                name='dob'
                value={userDetails.dob}
                onChange={handleChange}
                placeholder='Date of Birth'
              />
            </div>
            <div className='form-field'>
              <select
                name='gender'
                value={userDetails.gender}
                onChange={handleChange}
              >
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </div>
          </div>

          {/* Experience Level, Career Interests, and Work Preferences */}
          <div className='form-row'>
            <div className='form-field'>
              <select
                name='experience_level'
                value={userDetails.experience_level}
                onChange={handleChange}
              >
                <option value=''>Experience Level</option>
                <option value='fresher'>Fresher</option>
                <option value='mid_level'>Mid-Level</option>
                <option value='senior'>Senior</option>
              </select>
            </div>
            <div className='form-field'>
              <select
                name='career_interests'
                value={userDetails.career_interests}
                onChange={handleChange}
              >
                <option value=''>Career Interests</option>
                <option value='technology'>Technology</option>
                <option value='healthcare'>Healthcare</option>
                <option value='marketing'>Marketing</option>
                <option value='finance'>Finance</option>
                <option value='arts'>Arts</option>
              </select>
            </div>
            <div className='form-field'>
              <select
                name='work_preferences'
                value={userDetails.work_preferences}
                onChange={handleChange}
              >
                <option value=''>Work Preferences</option>
                <option value='full_time'>Full-Time</option>
                <option value='part_time'>Part-Time</option>
                <option value='remote'>Remote</option>
                <option value='contract'>Contract</option>
              </select>
            </div>
          </div>

          {/* Skills, Education Level */}
          <div className='form-row'>
            <div className='form-field'>
              <input
                type='text'
                name='skills'
                value={userDetails.skills}
                onChange={handleChange}
                placeholder='Skills (comma separated)'
              />
            </div>
            <div className='form-field'>
              <select
                name='education_level'
                value={userDetails.education_level}
                onChange={handleChange}
              >
                <option value=''>Education Level</option>
                <option value='highschool'>High School</option>
                <option value='bachelor'>Bachelor's</option>
                <option value='master'>Master's</option>
                <option value='doctorate'>Doctorate</option>
              </select>
            </div>
          </div>

          {/* Languages Spoken, Hobbies */}
          <div className='form-row'>
            <div className='form-field'>
              <input
                type='text'
                name='languages_spoken'
                value={userDetails.languages_spoken}
                onChange={handleChange}
                placeholder='Languages Spoken'
              />
            </div>
            <div className='form-field'>
              <input
                type='text'
                name='hobbies'
                value={userDetails.hobbies}
                onChange={handleChange}
                placeholder='Hobbies'
              />
            </div>
          </div>

          {/* Past Experience, Salary Expectations */}
          <div className='form-row'>
            <div className='form-field'>
              <input
                type='text'
                name='past_experience'
                value={userDetails.past_experience}
                onChange={handleChange}
                placeholder='Past Experience'
              />
            </div>
            <div className='form-field'>
              <input
                type='text'
                name='salary_expectations'
                value={userDetails.salary_expectations}
                onChange={handleChange}
                placeholder='Salary Expectations'
              />
            </div>
          </div>

          <div className='form-field'>
            <button type='submit' className='btn-primary'>
              Create Account
            </button>
          </div>
        </form>
        <div className='login-link'>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
