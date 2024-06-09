import React, { useEffect } from "react";
import { FaHotel,FaArrowRight } from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";

import { IoIosPeople } from 'react-icons/io';
import Usidebar from "../Usidebar/Usidebar";
import "./Uabout.css";
import Ufooter from "../Ufooter/Ufooter";

const Uabout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="about" className="about">
        <div className="about-heading">
          <h1>About Us</h1>
        </div>
        <div className="about-container">
          <div className="about-welcome">
            <div className="aboutus">
              <h2>Welcome to <span className="highlight">CITY VIEW IN</span></h2>
              <p>
                At <span className="bold">CITY VIEW IN</span>, we believe that every stay should be more than
                just a temporary stopover, our hotel is more than just a place to
                rest your head – it's an experience waiting to unfold.
              </p>
              <div className="about-box-room">
                <div className="about-box-room-item">
                  <FaHotel className="about-icon" />
                  <h1>100</h1>
                  <h3>Rooms</h3>
                </div>
                <div className="about-box-room-item">
                  <IoIosPeople className="about-icon" />
                  <h1>150</h1>
                  <h3>Staffs</h3>
                </div>
                <div className="about-box-room-item">
                  <FaPeopleGroup className="about-icon" />
                  <h1>5000</h1>
                  <h3>Customers</h3>
                </div>
              </div>
              <div className="about-explore">
                <h2>Explore Our Rooms <FaArrowRight className="arrow-icon" /></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Usidebar />
    </>
  );
};

export default Uabout;
