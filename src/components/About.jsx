
import { about } from "../constants";
import { SectionWrapper } from "../hoc";


// eslint-disable-next-line react/prop-types
const ServiceCard = ({title, description}) => (


  <div className="xs:w-[350px] w-full">
    <div className="w-full  p-[1px] rounded-[10px] shadow-lg">
      <div className="bg-white flex rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col  hover:scale-125 transition-transform transform ">
        <h3 className="text-black  md:text-3xl text-[20px] font-bold text-center">
          {title}
        </h3>
        <h4 className="text-black md:text-[15px] text-[10px] text-center">{description}</h4>
      </div>
    </div>
  </div>




);

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <h2 className="text-center mt-4 text-black text-[40px] max-w-3xl leading-[50px]"
        style={{ margin: '0 auto' }}>
          HexTech was founded in 2017 with a mission to provide high-quality mobile repair services.
      </h2>
     
      <div id="about" className="mt-20 flex justify-around flex-wrap gap-10">
        {about.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="bg-gray-200 h-px w-full my-8"></div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
