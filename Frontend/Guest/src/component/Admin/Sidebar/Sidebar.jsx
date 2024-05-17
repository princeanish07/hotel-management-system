import React from "react";
import "./Sidebar.css";
import {
  MdDashboard,
  MdMiscellaneousServices,
  MdOutlineSoupKitchen,
} from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="logo">
          <h1>ADMIN</h1>
        </div>
        <div className="category">
          <div className="list">
            <ul>
              <div className="list-item">
                
              </div>
              <li>
              <span><MdDashboard/>  </span>   <span>Dashboard</span>
              </li>
              <li><span><FaHouse/>  </span>   <span>Rooms</span></li>
              <li><span><MdMiscellaneousServices/>  </span>   <span>Services</span></li>
              <li><span><MdOutlineSoupKitchen/>  </span>   <span>Kitchen</span></li>
              <li><span><FcBusinessman/>  </span>   <span>Customer</span></li>
              <li><span><CiCircleChevRight/>  </span>   <span>Check In</span></li>
              <li><span><CiCircleChevLeft/>  </span>   <span>Check Out</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
