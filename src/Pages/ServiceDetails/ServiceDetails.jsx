import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiStar } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [service, setService] = useState({});
  const form = (e) => {
    e.preventDefault();
    e.target.name.value = '';
    e.target.mail.value = '';
    toast.success("Booked successfully!")
    // console.log(e.target.name.value)
  }
  
//   console.log(id, data, service);
  useEffect(() => {
    const ServiceDetails = data.find(
      (singleService) => singleService.serviceId == id
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setService(ServiceDetails);
  }, [data, id]);

  return (
    <div className="container mx-auto flex flex-col md:flex-row lg:flex-row mt-20">
      <div className="flex-1">
        <img src={service.image} alt="" />
      </div>
      <div className="flex-1 bg-gray-100">
        <div className="p-4">
          <h2 className="text-3xl font-bold">Service: {service.serviceName}</h2>
          <h3>
            <span className="text-xl font-semibold">Provider:</span>{" "}
            <span>{service.providerName}</span>
          </h3>
          <h3>
            <span className="text-xl font-semibold">Provider Email:</span>{" "}
            <span>{service.providerEmail}</span>
          </h3>
          <h3>
            <span className="text-xl font-semibold">Price:</span>{" "}
            <span>${service.price}</span>
          </h3>
          <h3 className="flex items-center">
            <span className="text-xl font-semibold">Rating:</span>
            <CiStar /> <span>{service.rating}</span>
          </h3>
          <h3>
            <span className="text-xl font-semibold">Available:</span>{" "}
            <span>{service.slotsAvailable}</span>
          </h3>
          <h3>
            <span className="text-xl font-semibold">Description:</span>{" "}
            <span>{service.description}</span>
          </h3>
          <h3>
            <span className="text-xl font-semibold">Category:</span>{" "}
            <span>{service.category}</span>
          </h3>
          <div className="space-y-4 mt-3">
            <form action="" onSubmit={form}>
                <label className="font-semibold text-[15px]">Name</label>
            <br />
            <input
              className="w-full bg-white border-1 p-3"
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
              required
            />
            <br />
            <label className="font-semibold text-[15px]">Email</label>
            <br />
            <input
              className="w-full bg-white border-1 p-3"
              type="email"
              name="mail"
              id=""
              placeholder="Enter Your Email"
              required
            />
            <button className="w-full bg-amber-600 p-3 text-white my-3">Book Now</button>
            <Toaster />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
