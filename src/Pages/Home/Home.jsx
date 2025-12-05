
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Link, useLoaderData} from "react-router";

const Home = () => {
  const data = useLoaderData();
 
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/HfVsNWgP/Adobe-Stock-314342216-scaled.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/TMdMLcHH/dog-coat-1024x717.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Z6L8QMR2/jeremy-bishop-ph5-Ayj-Flt-QU-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/7tkwFfNW/elisa-pitkanen-cwk-Rd-Es-ZYn0-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/fYRtH0Jh/elisa-pitkanen-rf-ANqv-OV-0-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/yctYRvJ6/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/8DvXcvPG/marie-michele-bouchard-x-Ez-Irv-JX6-LQ-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Rkm9qc4d/ybag-media-se3p-Se-T0md-M-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/yctSH7sF/Dog-Sweater-Alice-Neal-Love-Knitting-5c649c6646e0fb0001f09122.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <h2 className="text-3xl text-center font-bold mt-20">
        Popular Winter Care Services
      </h2>
      <p className="text-center my-5">
        Ensure your pets stay warm, healthy, and comfortable throughout the
        chilly winter
        <br /> months with our range of specialized winter care services
        designed to meet all their needs
      </p>
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {data.map((Services) => (
          <div
            key={Services.serviceId}
            className="p-2 h-[405px] bg-gray-50 flex flex-col items-center justify-center shadow-2xl space-y-1 rounded-xl"
          >
            <div>
              <img
                className="w-[400px] h-[285px] rounded-[15px]"
                src={Services.image}
                alt=""
              />
            </div>
            <h4 className=" text-xl font-bold">{Services.serviceName}</h4>
            <div className="flex  gap-3  text-sm">
              <div className="bg-[#F1F5E8] p-2 text-[#00D390] border-2">
                Rating: {Services.rating}
              </div>
              <div className="bg-[#FFF0E1] p-2  items-center text-[#FF8811] border-2">
                Price: ${Services.price}
              </div>
            </div>
            <button className="text-center btn-ghost hover:text-white  hover:cursor-pointer hover:bg-black p-2">
             <Link to={`/service-details/${Services.serviceId}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
