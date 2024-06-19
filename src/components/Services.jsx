// eslint-disable-next-line no-unused-vars
import React from "react";
import { service1, service2, laptopSale, winUpdate, repair } from "../assets";

const Services = () => {
  return (
    <>
      <h2 className="text-center text-800 text-[42px] font-bold mb-8">
        Our Services
      </h2>
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
            <h2 className="font-bold text-2xl pb-4 xl:leading-[50px] xl:text-[40px]">
              Windows upgrade
            </h2>
            <h3 className="text-lg  pb-4 mb-4">
              Upgrade your laptop to the latest version of Windows for enhanced
              performance, security, and new features. Our expert technicians
              will handle the entire upgrade process, ensuring a smooth
              transition and optimal setup.
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
              src={winUpdate}
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

      <div style={{ margin: "0 auto", width: "70%" }}>
        <div className="flex flex-col md:flex-row">
          <div className="pb-4 md:w-2/3">
            <h2 className="font-bold text-2xl pb-4 xl:leading-[50px] xl:text-[40px]">
              Laptop Sales and Services
            </h2>
            <h3 className="text-lg  pb-4 mb-4">
              Looking for a new laptop or need repairs for your current one? We
              provide expert sales and service solutions, including hardware
              upgrades, software installations, and routine maintenance. Trust
              us to keep your laptop performing at its best.
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
              src={laptopSale}
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
            <img src={repair} alt="Service" style={{ borderRadius: "15px" }} />
          </div>
          <div className="pb-4 md:w-2/3">
            <h2 className="font-bold text-2xl pb-4 xl:leading-[50px] xl:text-[40px]">
              Repair and Services
            </h2>
            <h3 className="text-lg  pb-4 mb-4">
              Experiencing issues with your laptop? Our skilled technicians
              offer a wide range of repair services, including hardware repairs,
              software troubleshooting, and routine maintenance. We ensure your
              laptop is running smoothly and efficiently.
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
