// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/User/Unavbar/Unavbar';
import Uaccomodation from './component/User/Uaccomodation/Uaccomodation';

import Services from './component/User/Uservices/Uservices';
import About from './component/User/Uabout/Uabout/';
import Contact from './component/User/Ucontact/Ucontact';
// import Rooms from './component/User/Uroom/Uroom';
import Home from './component/User/Uhome/Uhome';
import Login from './component/User/Ulogin/Usignin'
import Signup from './component/User/Ulogin/Usignup';
import Homepage from './Pages/Adminpage/Homepage/Homepage';
import Gallery from './component/User/Ugallery/Ugallery'
import Dining from './component/User/Udining/Udining'
import Sidebar from './component/User/Usidebar/Usidebar';
import Uconferencehall from './component/User/Uconferencehall/Uconferencehall';
import Footer from './component/User/Ufooter/Ufooter';
import Ucareer from './component/User/Ucareer/Ucareer';
import Ufooter from './component/User/Ufooter/Ufooter';
import Arooms from './component/Admin/Arooms/Arooms';
import axios from "axios"

const App = () => {
  const getdata = async()=>{
    await axios.get("")
  }
  return (


    <BrowserRouter>
    
     
      
      <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route path="/admin" element={<Homepage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/accomodation" element={<Uaccomodation/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dining" element={<Dining/>} />

        <Route path="/career" element={<Ucareer/>} />

        <Route path="/banquetsconferencehallandmeetingrooms" element={<Uconferencehall/>} />

        <Route path="/arooms" element={<Arooms/>} />




      </Routes>
    

     

     
    </BrowserRouter>
    
  );
};

export default App;
