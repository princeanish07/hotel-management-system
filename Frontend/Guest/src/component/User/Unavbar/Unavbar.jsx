// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Unavbar.css';
import Usidebar from '../Usidebar/Usidebar'; 

const Unavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={`Unavbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="Unavbar-logo">Logo</div>
      <div className="Unavbar-actions">
        <button className="Unavbar-book-now" onClick={toggleSidebar}>
          Book Now
        </button>
        <Usidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Unavbar;
