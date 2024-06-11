import React, { useState } from 'react';
import './Usign.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const Usignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Add more password validation rules as needed
    return password.length >= 6;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const postdata = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/user/signup/', formData);
      console.log(res?.data);
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      setErrors({});
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      postdata();
    }
  };

  return (
    <>
      <div id="register" className="user-signup-form">
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="error">{errors.email}</p>}
            
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            {errors.password && <p className="error">{errors.password}</p>}
            
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required />
            {errors.confirm_password && <p className="error">{errors.confirm_password}</p>}
            
            <input type="submit" value="Submit" />
          </form>
          <p className="para-1">
            By clicking the Sign Up button, you agree to our <br />
            <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
          </p>
        </div>
        <p className="para-2">
          Already have an account? <Link to="/signin" className="navbar-link">Login</Link>
        </p>
      </div>
    </>
  );
}

export default Usignup;
