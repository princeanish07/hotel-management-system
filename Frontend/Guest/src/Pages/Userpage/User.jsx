import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Unavbar from '../../component/User/Unavbar/Unavbar';
import Ufooter from '../../component/User/Ufooter/Ufooter';

const User = () => {
  return (
 <>
 <div className="user-main-container">
    <div className="user-navbar">
        <Unavbar/>
    </div>
    <div className="user-routes">

    </div>
    <div className="user-footer">
        <Ufooter/>
    </div>
 </div>
 
 </>
  )
}

export default User