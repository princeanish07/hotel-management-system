import React, { useEffect } from "react";
import "./Ufooter.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareThreads, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/accomodation">ACCOMODATION</Link>
            </li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/dining">DINING</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/banquetsconferencehallandmeetingrooms">
                BANQUETS, CONFERENCE HALL AND MEETING ROOMS
              </Link>
            </li>
            <li>
              <Link to="/package">PACKAGE</Link>
            </li>
            <li>
              <Link to="/Career">CAREER</Link>
            </li>
            <li>
              <Link to="/reviews">REVIEWS</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ufooter;
