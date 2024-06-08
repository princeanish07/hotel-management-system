import React, { useState, useEffect } from 'react';
import './Uaccomodation.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Ufooter from '../Ufooter/Ufooter.jsx';
import Usidebar from '../Usidebar/Usidebar.jsx';

const Uaccomodation = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/user/get-rooms/');
      console.log(response.data);
      setRooms(response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  return (
    <>
      <div id='accommodation' className="accomodation">
        <div className="accomodation-con">
          <h1>Accommodation</h1>
        </div>
        <div className="room">
          {rooms.map((room, index) => (
            <div key={index} className="room-type">
              <div className="room-type-image">
                <img src={`http://127.0.0.1:8000${room.room_image}`} alt={room.room_name} />
              </div>
              <div className="room-type-title">{room.room_name}</div>
              <div className="room-type-more">
                <div className="room-type-para">
                  {room.hotel_description} 
                </div>
                <Link to='/'>More</Link>
              </div>
              <div className="room-type-book">
                <Link to='/'>Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Usidebar />
     
    </>
  );
};

export default Uaccomodation;
