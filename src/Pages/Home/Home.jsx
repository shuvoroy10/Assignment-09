import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Link, useLoaderData } from "react-router";

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
      <h2 className="text-xl lg:text-3xl text-center font-bold mt-20">
        Popular Winter Care Services
      </h2>
      <p className="text-[10px] lg:text-[15px] text-center my-1 lg:my-5">
        Ensure your pets stay warm, healthy, and comfortable throughout the
        chilly winter
        <br /> months with our range of specialized winter care services
        designed to meet all their needs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
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
              <Link to={`/service-details/${Services.serviceId}`}>
                View Details
              </Link>
            </button>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 py-5">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mt-20">
            Winter Care Tips for Pets
          </h2>
          <p className="text-center my-5">
            Keep your pets warm, healthy, and happy this winter with simple care
            tips for <br /> nutrition, grooming, and protection from the cold.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-2 justify-evenly">
            <div>
              <iframe className="w-[240px] lg:w-[560px]"
                
                height="315"
                src="https://www.youtube.com/embed/MTxhTU1HGm4?si=riaAlRGSzf7fcFRs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                className="w-[240px] lg:w-[560px]"
                height="315"
                src="https://www.youtube.com/embed/Jh-5tPpzNXU?si=-A5HVi1aktCkGWUE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mt-20">
          Meet Our Expert Vets
        </h2>
        <p className="text-center my-5">
          Meet our skilled and caring vets dedicated to keeping your pets
          healthy and happy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <img className="rounded-[50%] border-2 border-green-600" src="https://i.ibb.co.com/b51ywkKD/1-2.jpg" alt="" />
            <div className="border-x-2 border-green-600 p-3 mb-4">
              <h4 className="font-semibold text-center text-xl mb-2">Dr. Arif Hasan</h4>
              <h4><span className="font-semibold">Position:</span> Veterinary Surgeon</h4>
              <h4><span className="font-semibold">Specialty:</span> Small animal surgery, emergency treatment</h4>
              <h4><span className="font-semibold">Education:</span> DVM, Chittagong Veterinary & Animal Sciences University</h4>
              <h4><span className="font-semibold">Available:</span> Sun–Thu, 10 AM – 6 PM</h4>
            </div>
          </div>
          <div>
            <img className="rounded-[50%] border-2 border-green-600" src="https://i.ibb.co.com/hRyPPZQR/2-2.jpg" alt="" />
            <div className="border-x-2 border-green-600 p-3 mb-4">
              <h4 className="font-semibold text-center text-xl mb-2">Dr. Tanveer Rahman</h4>
              <h4><span className="font-semibold">Position:</span> Exotic Animal Veterinarian</h4>
              <h4><span className="font-semibold">Specialty:</span> Birds, rabbits, reptiles</h4>
              <h4><span className="font-semibold">Education:</span> DVM, Bangladesh Agricultural University</h4>
              <h4><span className="font-semibold">Available:</span> Mon–Fri, 9 AM – 5 PM</h4>
            </div>
          </div>
          <div>
            <img className="rounded-[50%] border-2 border-green-600" src="https://i.ibb.co.com/nNTsyTYZ/4.jpg" alt="" />
            <div className="border-x-2 border-green-600 p-3 mb-4">
              <h4 className="font-semibold text-center text-xl mb-2">Dr. Maya Sen</h4>
              <h4><span className="font-semibold">Position:</span> Senior Veterinary Consultant</h4>
              <h4><span className="font-semibold">Specialty:</span> Chronic illness, dermatology, senior pet care</h4>
              <h4><span className="font-semibold">Education:</span> DVM, Rajshahi University</h4>
              <h4><span className="font-semibold">Available:</span> Sun–Thu, 12 PM – 8 PM</h4>
            </div>
          </div>

          <div>
            <img className="rounded-[50%] border-2 border-green-600" src="https://i.ibb.co.com/s9McQScD/3.jpg" alt="" />
            <div className="border-x-2 border-green-600 p-3 mb-4">
              <h4 className="font-semibold text-center text-xl mb-2">Dr. Nisha Khandel</h4>
              <h4><span className="font-semibold">Position:</span> Pet Nutrition Specialist</h4>
              <h4><span className="font-semibold">Specialty:</span> Animal diet planning, weight management, puppy/kitten nutrition</h4>
              <h4><span className="font-semibold">Education:</span> DVM, Sylhet Agricultural University</h4>
              <h4><span className="font-semibold">Available:</span> Sat–Wed, 11 AM – 7 PM</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
