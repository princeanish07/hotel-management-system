// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './component/User/Unavbar/Unavbar';
import Uaccomodation from './Pages/Userpage/Accomodation';

import Services from './Pages/Userpage/Services';
import AboutUs from './Pages/Userpage/AboutUs';
import Contact from './Pages/Userpage/Contact';
// import Rooms from './component/User/Uroom/Uroom';

import Login from './component/User/Ulogin/Usignin'
import Signup from './component/User/Ulogin/Usignup';
import Homepage from './Pages/Adminpage/Homepage/Homepage';
import Gallery from './Pages/Userpage/Gallery'
import Dining from './component/User/Udining/Udining'
import Sidebar from './component/User/Usidebar/Usidebar';
import Uconferencehall from './component/User/Uconferencehall/Uconferencehall';
import Footer from './component/User/Ufooter/Ufooter';
import Ucareer from './component/User/Ucareer/Ucareer';
import Ufooter from './component/User/Ufooter/Ufooter';
import Arooms from './component/Admin/Arooms/Arooms';
import axios from "axios"
import Landingpage from './Pages/Userpage/Landingpage';

const App = () => {
  const getdata = async()=>{
    await axios.get("")
  }
  return (


    <BrowserRouter>
    
     
      
      <Routes>
      
        <Route exact path="/" element={<Landingpage/>} />
        <Route path="/admin" element={<Homepage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/accomodation" element={<Uaccomodation/>} />
         
        <Route path="/about" element={<AboutUs/>} />

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
