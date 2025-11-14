import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide><img src="https://i.ibb.co.com/HfVsNWgP/Adobe-Stock-314342216-scaled.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/TMdMLcHH/dog-coat-1024x717.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/Z6L8QMR2/jeremy-bishop-ph5-Ayj-Flt-QU-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/7tkwFfNW/elisa-pitkanen-cwk-Rd-Es-ZYn0-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/fYRtH0Jh/elisa-pitkanen-rf-ANqv-OV-0-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/yctYRvJ6/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/8DvXcvPG/marie-michele-bouchard-x-Ez-Irv-JX6-LQ-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/Rkm9qc4d/ybag-media-se3p-Se-T0md-M-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/yctSH7sF/Dog-Sweater-Alice-Neal-Love-Knitting-5c649c6646e0fb0001f09122.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
