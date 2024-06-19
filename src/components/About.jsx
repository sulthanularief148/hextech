// // eslint-disable-next-line react-refresh/only-export-components

import { about } from "../constants";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description }) => (
  <div className="xs:w-[350px] w-full">
    <div className="w-full p-[1px] rounded-[10px] shadow-lg transform transition-transform hover:scale-105">
      <div className="bg-white flex rounded-[20px] py-5 px-12 min-h-[280px] flex-col justify-evenly items-center">
        <h3 className="text-black md:text-3xl text-[20px] font-bold text-center">
          {title}
        </h3>
        <h4 className="text-black md:text-[15px] text-[10px] text-center">
          {description}
        </h4>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-white pt-[3rem]">
        <h2 className="text-center text-800 text-[42px] font-bold mb-8">
          About Us
        </h2>
        <div id="about" className="mt-10 flex flex-col items-center gap-10">
          <h2 className="text-center mt-4 text-black text-[32px] max-w-2xl leading-[51px] mx-auto">
            HexTech was founded in 2017 with a mission to provide high-quality
            mobile repair services.
          </h2>
          <div className="mt-10 flex justify-center flex-wrap gap-10">
            {about.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full my-8"></div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default About;
