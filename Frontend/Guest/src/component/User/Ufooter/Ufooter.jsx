import React, { useEffect } from "react";
import "./Ufooter.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareThreads, FaYoutube } from "react-icons/fa6";
import { Link,NavLink } from "react-router-dom";

const Ufooter = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <div className="Ufooter">
        <div className="Ufooter-con">
          <ul>
            <li>  
              <p>Kaligandaki Chowk Gaidakot-05,Nawalpur,Nepal</p>
            </li>
            <li>
              <span>T</span> +977-9806121088
            </li>
            <li>
              <span>E</span> Reservation@cityviewin.com
            </li>
            <li>
              <span>W</span> www.cityviewin.com.np
            </li>
          </ul>
        </div>
        <div className="Ufooter-middle">
          <div className="Ufooter-middle-header">
            <h2>JOIN THE CONVERSATION</h2>
          </div>
          <div className="Ufooter-socialmedia">
            <a href="#">
              <FaSquareInstagram className="Ufooter-socialmedia-item" />
            </a>
            <a href="#">
              <FaFacebook className="Ufooter-socialmedia-item" />{" "}
            </a>
            <a href="#">
              <FaYoutube className="Ufooter-socialmedia-item" />
            </a>
          </div>
        </div>
        <div className="Ufooter-lower">
          <ul>
            <li>
              <NavLink to="/" className='Ufooter-lower-navlink'>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about"  className='Ufooter-lower-navlink'>ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/accomodation" className='Ufooter-lower-navlink'>ACCOMODATION</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className='Ufooter-lower-navlink'>GALLERY</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='Ufooter-lower-navlink'>CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/dining" className='Ufooter-lower-navlink'>DINING</NavLink>
            </li>
            <li>
              <NavLink to="/services" className='Ufooter-lower-navlink'>SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/banquetsconferencehallandmeetingrooms" className='Ufooter-lower-navlink'>
                BANQUETS, CONFERENCE HALL AND MEETING ROOMS
              </NavLink>
            </li>
            <li>
              <NavLink to="/package" className='Ufooter-lower-navlink'>PACKAGE</NavLink>
            </li>
            <li>
              <NavLink to="/Career" className='Ufooter-lower-navlink'>CAREER</NavLink>
            </li>
            <li>
              <NavLink to="/reviews" className='Ufooter-lower-navlink'>REVIEWS</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ufooter;
