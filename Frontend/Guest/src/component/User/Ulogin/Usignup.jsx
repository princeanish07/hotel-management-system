import React, { useEffect, useState } from 'react';
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postdata = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/user/signup/', formData);
      console.log(res?.data);
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postdata();
  };

  return (
    <>

    <div id="register" className="user-signup-form">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" placeholder="" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" placeholder="" required name="email" value={formData.email} onChange={handleChange} />
          <label>Password</label>
          <input type="password" placeholder="" required name="password" value={formData.password} onChange={handleChange} />
          <label>Confirm Password</label>
          <input type="password" placeholder="" required name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <p className="para-1">
          By clicking the Sign Up button, you agree to our <br />
          <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        </p>
      </div>
      <p className="para-2">
        Already have an account? <a href="/signin" className="navbar-link">Login</a>
      </p>
    </div>
    </>
  );
}

export default Usignup;
