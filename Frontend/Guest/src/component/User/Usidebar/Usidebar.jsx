import React, { useEffect, useState } from 'react';
import './Usidebar.css';
import { Link } from 'react-router-dom'; 


const Usidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth'});
    }
};

useEffect(()=>{
  window.scrollTo(0, 0);
},[])

  return (
    <div>
     
      {!isOpen && (
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
      )}

     
      <div className={`Usidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
          <div className="close-icon" onClick={toggleSidebar}>
            ❌
          </div>
        )}
          <ul onClick={toggleSidebar}  >
          <Link  onClick={() => handleClick('home') }to='/'  >
        <li  className='Usidebar-link' >
            Home
        </li>
          </Link>

          <Link to="/about" className='Usidebar-link'   >
        <li  onClick={() => handleClick('about') }>
            About Us
        </li>
          </Link>
          <Link to="/accomodation" className='Usidebar-link' onClick={() => handleClick('accommodation') }>
        <li>
            Accomodation
        </li>
          </Link>
          <Link to="/services" className='Usidebar-link' onClick={() => handleClick('service')}>
        <li >
            Service
        </li>
          </Link>
       
          <Link to="/banquetsconferencehallandmeetingrooms"className='Usidebar-link' onClick={() => handleClick('conferencehall')} >
            <li >
          BANQUETS, CONFERENCE HALL AND MEETING ROOMS
        </li>
          </Link>
          <Link to="/gallery" className='Usidebar-link' onClick={() => handleClick('gallery')}>
        <li >
            Gallery
        </li>
          </Link>
          <Link to="/contact"className='Usidebar-link' onClick={() => handleClick('contact')} >
        <li >
            Contact
        </li>
          </Link>
          <Link to="/dining"className='Usidebar-link' onClick={() => handleClick('dining')} >
        <li >
            Dining
        </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Usidebar;
