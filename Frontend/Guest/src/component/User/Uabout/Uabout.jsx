import React, { useEffect } from "react";
import "./Uabout.css"; 
import { FaPeopleGroup, FaHotel } from 'react-icons/fa6';
import { IoIosPeople } from 'react-icons/io';
import hotel1_gallery from '../../../assets/hotel-gallery.jpg'
import hotel2_gallery from '../../../assets/hotel1-gallery.jpg'
import hotel3_gallery from '../../../assets/hotel2-gallery.jpg'
import hotel4_gallery from '../../../assets/hotel3-gallery.jpg'
import Ufooter from "../Ufooter/Ufooter";
import Usidebar from "../Usidebar/Usidebar";


const Uabout = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <div id="about" className="about">
      <div className="about-heading">
          <h1>About Us</h1>
        </div>
      <div className="about-container">
        
        <div className="about-welcome">
          <div className="aboutus">
            <h2>Welcome to <span style={{color:'red'}}>CITY VIEW IN </span> </h2>
            <p>
              At <span style={{fontWeight:700}}>CITY VIEW IN</span>, we believe that every stay should be more than
              just a temporary stopover , our hotel is more than just a place to
              rest your head – it's an experience waiting to unfold.
            </p>
            <div className="about-box-room">
              <div className="about-box-room-item">
            <h2> <FaHotel/>  </h2>
            <h1>100</h1>
            <h3>Rooms</h3>

              </div>
              <div className="about-box-room-item">
            <h2> <IoIosPeople/>  </h2>
            <h1>80</h1>
            <h3>Staffs</h3>

              </div>
              <div className="about-box-room-item">
            <h2> <FaPeopleGroup/>  </h2>
            <h1>5000</h1>
            <h3>Customer</h3>

              </div>
              

            </div>
            <div className="about-explore">
              <h2>Explore Our Rooms</h2>
            </div>
          </div>
        </div>
        <div className="about-photo">
          <img src={hotel1_gallery}alt="" className="img1" />
          <img src={hotel2_gallery}alt="" className="img2" />
          <img src={hotel3_gallery}alt="" className="img3" />
          <img src={hotel4_gallery}alt="" className="img4" />

        </div>
      </div>
    </div>
    <Usidebar/>
    <Ufooter/>
    
    </>
  );
};

export default Uabout;
