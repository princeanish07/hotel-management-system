import React, { useState, useEffect } from 'react';
import './Usidebar.css';
import { Link,NavLink } from 'react-router-dom';

const Usidebar = ({ isOpen, toggleSidebar }) => {
  const handleClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`Usidebar ${isOpen ? 'open' : ''}`}>
      <div className="Usidebar-content">
        <div className="close-icon" onClick={toggleSidebar}>
          ❌
        </div>
        <ul onClick={toggleSidebar}>
          <NavLink to="/" className="Usidebar-NavLink" onClick={() => handleClick('home')}>
            <li >Home</li>
          </NavLink>
          <NavLink to="/about"className="Usidebar-NavLink" onClick={() => handleClick('about')}>
            <li>About Us</li>
          </NavLink>
          <NavLink to="/accomodation"className="Usidebar-NavLink" onClick={() => handleClick('accommodation')}>
            <li>Accommodation</li>
          </NavLink>
          <NavLink to="/services"className="Usidebar-NavLink" onClick={() => handleClick('service')}>
            <li>Service</li>
          </NavLink>
          <NavLink to="/banquetsconferencehallandmeetingrooms" className="Usidebar-NavLink" onClick={() => handleClick('conferencehall')}>
            <li>BANQUETS, CONFERENCE HALL AND MEETING ROOMS</li>
          </NavLink>
          <NavLink to="/gallery" className="Usidebar-NavLink" onClick={() => handleClick('gallery')}>
            <li>Gallery</li>
          </NavLink>
          <NavLink to="/contact" className="Usidebar-NavLink" onClick={() => handleClick('contact')}>
            <li>Contact</li>
          </NavLink>
          <NavLink to="/dining" className="Usidebar-NavLink" onClick={() => handleClick('dining')}>
            <li>Dining</li>
          </NavLink> 
        </ul>
      </div>
    </div>
  );
};

export default Usidebar;
