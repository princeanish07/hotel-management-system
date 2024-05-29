import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Uconferencehall.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hallimg1 from "./Uconferencehall-img/hallimg1.jpg";
import hallimg2 from "./Uconferencehall-img/hallimg2.jpg";
import hallimg3 from "./Uconferencehall-img/hallimg3.jpg";
import hallimg4 from "./Uconferencehall-img/hallimg4.jpg";
import hallimg5 from "./Uconferencehall-img/hallimg5.jpg";
import hallimg6 from "./Uconferencehall-img/hallimg6.jpg";
import hallimg7 from "./Uconferencehall-img/hallimg7.jpg";
import farpavilion from './Uconferencehall-img/farpavillion1.jpg'

import Ufooter from "../Ufooter/Ufooter";
import Usidebar from "../Usidebar/Usidebar";

// import "swiper/css";
const hallimage={
    meetinghallimg:[hallimg1,hallimg2,hallimg3,hallimg4,hallimg5,hallimg6,hallimg7],
    mettinghallspecialimg:[],
};
const Uconferencehall = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <div id="conferencehall" className="Uconferencehall">
        <div className="Uconferencehall-con">
          <h1>BANQUETS, CONFERENCE HALL AND MEETING ROOMS</h1>
        </div>
        <div className="Umeetinghall">
          <div className="Umeetinghall-para">
            <p>
              Located in the heart of city, the Everest Hotel offer an
              outstanding venue with a beautiful ambience and professional
              staff. There are ample facilities for optimum comfort and a
              luxurious experience. Featuring two different banquet/conference
              halls and three meeting rooms within its premises, this property
              is perfect for hosting a range of functions from medium to large
              events. This grand space presents you with every opportunity to
              host an event that will be cherished by one and all for several
              decades to come. Fully equipped with high class facilities, The
              Everest Hotel presents the best venue for Exhibitions, Weddings,
              Banquets, Trade Shows, Product Launches and Conferences with both
              indoor and outdoor options.
            </p>
          </div>
          <div className="Umeetinghall-swiper">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{ delay: 3000 }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Autoplay, Navigation]}
              className="Swiper-meetinghall">
                {hallimage.meetinghallimg.map((src, index) => (
           <SwiperSlide className="swiperslide-Umeetinghall" key={index}>
          <img  src={src} alt='' />
          </SwiperSlide>
        ))}
              
            </Swiper>
          </div>
        </div>
        <div className="Umeetinghall-special">
          <div className="Umeetinghall-special-items">
            <Link to="/grandeballroom" className="meetinghall-link">
              <div className="Umeetinghall-special-img">
                <img src={hallimg1} alt="" />
                <h3> THE GRANDE BALLROOM</h3>
              </div>
            </Link>
          </div>
          <div className="Umeetinghall-special-items">
            <Link to="/farpavillion" className="meetinghall-link">
              <div className="Umeetinghall-special-img">
                <img src={farpavilion} alt="" />
                <h3> FAR PAVILLION</h3>
              </div>
            </Link>
          </div>
          <div className="Umeetinghall-special-items">
            <Link to="/sherpaland" className="meetinghall-link">
              <div className="Umeetinghall-special-img">
                <img src={hallimg6} alt="" />
                <h3> SHERPALAND</h3>
              </div>
            </Link>
          </div>
          <div className="Umeetinghall-special-items">
            <Link to="/capacitycharge" className="meetinghall-link">
              <div className="Umeetinghall-special-img">
                <img src={hallimg4} alt="" />
                <h3> CAPACITY CHART</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Usidebar/>
      <Ufooter/>
    </>
  );
};

export default Uconferencehall;
