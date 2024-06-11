import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay , Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Uhome.css";
import "swiper/css";
import hotel1_background from "./Uhome-gallery/hotel-background-img1.jpg";
import hotel2_background from "./Uhome-gallery/hotel-background-img2.jpg";
import hotel3_background from "./Uhome-gallery/hotel-background-img3.jpg";
import hotel4_background from "./Uhome-gallery/hotel-background-img4.jpg";
import hotel5_background from "./Uhome-gallery/hotel-background-img5.jpg";
import Unavbar from "../Unavbar/Unavbar";
const hotelhomegallery = {
  background: [
    hotel1_background,
    hotel2_background,
    hotel3_background,
    hotel4_background,
    hotel5_background,
  ],
};
const Uhome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Unavbar />
      <div id="home">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{delay: 3000 }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper-home"
        >
          {hotelhomegallery.background.map((src, index) => (
            <SwiperSlide className="swiper-slide-background" key={index}>
              <img src={src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Uhome;
