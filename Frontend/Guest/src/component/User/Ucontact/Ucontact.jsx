import React, { useEffect } from 'react'
import './Ucontact.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Usidebar from '../Usidebar/Usidebar';
import Ufooter from '../Ufooter/Ufooter';

const Ucontact = () => {
 
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <div id='contact' className="Ucontact">
        <div className="Ucontact-details">
          <div className="Ucontact-details-heading">
          <h3>GET IN TOUCH</h3>
          </div>
          <div className="Ucontact-detail-li">

            <ul>
              <li><span><FaLocationDot /></span> Gaindakot-05,Nawalpur,Nepal</li>
              <li><span><FaPhoneAlt /></span>977-97-45409272</li>
              <li><span><MdEmail /></span> reservations@princehotel.com </li>


            </ul>
          </div>
     </div>
           
        <div className="Ucontact-map">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3851575745293!2d84.40377637536898!3d27.70539197618373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb6fdfd935ed%3A0x29e6424f203a7aec!2sLUMBINI%20ICT%20CAMPUS!5e0!3m2!1sen!2snp!4v1716307075146!5m2!1sen!2snp"
            width="700"
            height="400"
            loading="lazy"
          >
          </iframe>
        
        </div>
    
    </div>
    <Usidebar/>
   
    </>
  )
}

export default Ucontact