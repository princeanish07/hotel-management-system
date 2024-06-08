import React, { useEffect } from 'react'
import './Uservices.css'
import { IoIosArrowForward } from "react-icons/io";
import Ufooter from '../Ufooter/Ufooter';
import Usidebar from '../Usidebar/Usidebar';
const Uservices = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
  
  <>
  <div id='service' className="services">
    <div className="facility-con">
      <h1>OUR FACILITIES</h1>
    </div>
    <div className="facility-list">
      <ul>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Valet Parking </span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Non-smoking Property</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Luxury</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Restaurants</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Room Service - 24hr</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Outdoor Pool - Unheated</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Travel Desk</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Arrival / Departure Lounge</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Concierge Desk</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Car rental desk</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Conventions</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Gym / Fitness Room</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Business Centre</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Wifi Access</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Cafe</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Food available</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Kids Pool</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>24 Hour Front Desk</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Luggage Storage</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Early Arrival</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Lift / Elevator</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Conference / Meeting Facilities</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Shops</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Bar / Lounge</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Dining</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Dry Cleaning / Laundry Service</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Porter / Bell Service</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Wheelchair Accessible</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Free Wifi</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Interconnecting Rooms</span></li>
        <li className="facility-item"><span><IoIosArrowForward/></span><span>Late Check-out</span></li>
       
      </ul>

    </div>
  </div>
  <Usidebar/>
 
  </>
  )
}

export default Uservices