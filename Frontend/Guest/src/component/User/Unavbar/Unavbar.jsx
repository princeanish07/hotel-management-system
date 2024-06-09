import React, { useState, useEffect } from 'react';
import './Unavbar.css';
import Usidebar from '../Usidebar/Usidebar';
import PopupForm from '../Popupform/PopupForm';
import Usignin from '../Ulogin/Usignin';

const Unavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const togglePopup = (content = null) => {
    setPopupContent(content);
    setIsPopupOpen(!isPopupOpen);
  };

  const renderPopupContent = () => {
    if (popupContent === 'bookNow') {
      return (
        <form onSubmit={(e) => { e.preventDefault(); togglePopup(); }}>
          <h2>City View Inn</h2>
          <label>
            Arrival:
            <input type="date" required />
          </label>
          <label>
            Departure:
            <input type="date" required />
          </label>
          <label>
            Adults:
            <input type="number" min="1" defaultValue="1" required />
          </label>
          <label>
            Children:
            <input type="number" min="0" defaultValue="0" required />
          </label>
          <label>
            Promo Code:
            <input type="text" />
          </label>
          <button type="submit" className="Unavbar-book-now">Book</button>
        </form>
      );
    } else if (popupContent === 'loginRegister') {
      return <Usignin />;
    }
    return null;
  };

  return (
    <nav className={`Unavbar ${scrolled ? 'scrolled' : ''} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="Unavbar-logo">Logo</div>
      <div className="Unavbar-actions">
        <button className={`Unavbar-book-now ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={() => togglePopup('bookNow')}>
          Book Now
        </button>
        <button className={`Unavbar-login-register ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={() => togglePopup('loginRegister')}>
          Login/Register
        </button>
        <div className="Unavbar-menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
      </div>
      <Usidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isPopupOpen && (
        <PopupForm isOpen={isPopupOpen} togglePopup={() => togglePopup(null)} content={renderPopupContent()} />
      )}
    </nav>
  );
};

export default Unavbar;
