import React from 'react';
import './PopupForm.css';

const PopupForm = ({ isOpen, togglePopup, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={togglePopup}>Close</button>
        {content}
      </div>
    </div>
  );
};

export default PopupForm;
