import React from "react";
import { Link, useLoaderData } from "react-router";

const Service = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mt-20">
        Our Winter Care Services
      </h2>
      <p className="text-center my-5">
        Ensure your pets stay warm, healthy, and comfortable throughout the
        chilly winter
        <br /> months with our range of specialized winter care services
        designed to meet all their needs
      </p>
      <div className="grid grid-cols-3 gap-4">
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

export default Service;
