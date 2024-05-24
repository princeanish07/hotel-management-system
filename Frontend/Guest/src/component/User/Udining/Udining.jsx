import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Udining.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,Navigation} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swipeimg1 from './Udining-img/swipeimg1.jpg'
import swipeimg2 from './Udining-img/swipeimg2.jpg'
import swipeimg3 from './Udining-img/swipeimg3.jpg'
import swipeimg4 from './Udining-img/swipeimg4.jpg'
import swipeimg5 from './Udining-img/swipeimg5.jpg'
import swipeimg6 from './Udining-img/swipeimg6.jpg'
import swipeimg7 from './Udining-img/swipeimg7.jpg'
import pan_asian from './Udining-img/pan-asianimg3.jpg'
import tigerbar from './Udining-img/tigerbar-img2.jpg'
import  pastryshop from './Udining-img/pastryimg.png'
import roomservice from './Udining-img/roomserviceimg.png'
import "swiper/css";

const diningimg={
  swipeimages:[swipeimg1,swipeimg2,swipeimg3,swipeimg4,swipeimg5,swipeimg5,swipeimg6,swipeimg7]
}

  


const Udining = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <div id='dining' className="Udining">
        <div className="Udining-con">
            <h1>The Cafe</h1>
        </div>
        <div className="Udining-cafe">
            <div className="Udining-Cafe-para">
                <p>The Café, An all-day dining restaurant at The Everest Hotel is among few restaurants
                     which operates 24/7 in the heart of Kathmandu, a self-service market 
                     style pool side restaurant, serving breakfast, lunch and dinner. 
                     The emphasis of the restaurant is on visual food displays in live cooking stations, 
                     offering the freshest product for each meal period.
                      Value for money, choice and ongoing change utilizing seasonal products, 
                      The Café offers Dessert counters, Italian kitchen, Grills, Nepali and Indian,
                       an appetizer counter and the salad bar. “Eating out of the pan, off the grill and out of the tandoor” 
                       is what best describes The Café.</p>
            </div>
            <div  className="Udining-cafe-swiper">
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{delay:3000,}}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination ,Autoplay,Navigation]}
        className="mySwiper-dining">
      
       
      
        {diningimg.swipeimages.map((src, index) => (
           <SwiperSlide className='swiper-slide-dining' key={index}>
          <img  src={src} alt='' />
          </SwiperSlide>
        ))}
      
        </Swiper>
            </div>
        </div>
        <div className="Udining-special">
          <div className="Udining-special-items">
          <Link to='/dining/pan-asian' className='dining-link'><div className='Udining-special-img'>
          <img src={pan_asian } alt="" />
          <h3> Pan Asian</h3>
            </div></Link>
          </div>
          <div className="Udining-special-items">
          <Link to='/dining/buggles&tigersbar' className='dining-link'><div className='Udining-special-img'>
          <img src={tigerbar} alt="" />
          <h3> Buggles & Tigers Bar</h3>
            </div></Link>
          </div>
          <div className="Udining-special-items">
          <Link to='/dining/ourpastryshop' className='dining-link'><div className='Udining-special-img'>
          <img src={pastryshop } alt="" />
          <h3> Sidewalk-Our Pastry Shop</h3>
            </div></Link>
          </div><div className="Udining-special-items" >
          <Link to='/dining/roomservice' className='dining-link'><div className='Udining-special-img'>
          <img src={roomservice } alt="" />
          <h3> Room Service</h3>
            </div></Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Udining