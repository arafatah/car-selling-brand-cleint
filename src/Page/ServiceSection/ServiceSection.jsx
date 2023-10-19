import { useEffect, useState } from "react";

const ServiceSection = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-4 my-5 container mx-auto" >
      {services?.map((service) => (
        <div key={service.id}>
          <div className="">
            <div className="flex justify-center items-center">

            <img
              src={service.logo}
              alt=""
              className="w-40 h-24 object-cover rounded-md"
            />
            </div>
            <div className=" text-center mt-4">
              <h2 className=" ">{service.title}</h2>
              <h2 className=" ">{service.description}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
