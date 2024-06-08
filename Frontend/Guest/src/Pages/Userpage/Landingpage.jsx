import React from 'react'
import Home from '../../component/User/Uhome/Uhome';
import About from '../../component/User/Uabout/Uabout'
import Ugallery from '../../component/User/Ugallery/Ugallery'
import Uaccomodation from '../../component/User/Uaccomodation/Uaccomodation'
import Uservices from '../../component/User/Uservices/Uservices'
import Ufooter from '../../component/User/Ufooter/Ufooter';
import Ucontact from '../../component/User/Ucontact/Ucontact';
const Landingpage = () => {
  return (
    <>
    <Home/>
    <About/>
    <Uaccomodation/>
    <Uservices/>
    <Ucontact/>
    <Ufooter/>

    </>
  )
}

export default Landingpage