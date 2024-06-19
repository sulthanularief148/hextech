// eslint-disable-next-line no-unused-vars
import React from "react";
import { service1, service2 } from "../assets";

const Services = () => {
  return (
    <>
      <div style={{ margin: "0 auto", width: "70%" }}>
        <div id="services" className="flex flex-col md:flex-row">
          <div className="p-4 md:w-1/3">
            <img
              src={service1}
              style={{ borderRadius: "15px" }}
              alt="Service"
            />
          </div>
          <div className="pb-4 md:w-2/3">
            {/* <h5 className="pb-4 md:text-2xl">Insights</h5> */}
            <h2 className="font-bold text-2xl pb-4 xl:leading-[50px] xl:text-[40px]">
              Screen Replacement
            </h2>
            <h3 className="text-lg  pb-4 mb-4">
              Cracked or shattered screen? Our technicians specialize in quick
              and reliable screen replacements. We use high-quality parts to
              ensure your display looks and functions like new.
            </h3>
            <button
              className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:w-1/4 mx-auto"
              type="submit"
              style={{ backgroundColor: "#222220" }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full my-8"></div>
      </div>

      <div style={{ margin: "0 auto", width: "70%" }}>
        <div className="flex flex-col md:flex-row">
          <div className="pb-4 md:w-2/3">
            {/* <h5 className="pb-4 md:text-2xl">Design</h5> */}
            <h2 className="font-bold text-2xl pb-4 xl:leading-[50px] xl:text-[40px]">
              Battery Replacement
            </h2>
            <h3 className="text-lg  pb-4 mb-4">
              Is your phone not holding a charge? We offer professional battery
              replacement services to get your device powered up and running
              efficiently, ensuring longer battery life.
            </h3>
            <button
              className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:w-1/4 mx-auto"
              type="submit"
              style={{ backgroundColor: "#222220" }}
            >
              Learn More
            </button>
          </div>
          <div className="p-4 md:w-1/3">
            <img
              src={service2}
              style={{ borderRadius: "15px" }}
              alt="Service"
            />
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full my-8"></div>
      </div>

      <div style={{ margin: "0 auto", width: "70%" }}>
        <div className="flex flex-col md:flex-row">
          <div className="p-4 md:w-1/3">
            <img
              src={service2}
              alt="Service"
              style={{ borderRadius: "15px" }}
            />
          </div>
          <div className="pb-4 md:w-2/3">
            {/* <h5 className="pb-4 md:text-2xl">Digital Presence</h5> */}
            <h2 className="font-bold text-2xl pb-4 xl:leading-[50px] xl:text-[40px]">
              Water Damage Repair
            </h2>
            <h3 className="text-lg  pb-4 mb-4">
              Dropped your phone in water? Our experts are equipped to handle
              water damage repairs. We thoroughly clean and repair your device
              to restore its functionality and prevent further issues.
            </h3>
            <button
              className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:w-1/4 mx-auto"
              type="submit"
              style={{ backgroundColor: "#222220" }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full my-8"></div>
      </div>
    </>
  );
};

export default Services;
