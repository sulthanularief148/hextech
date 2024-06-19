// eslint-disable-next-line no-unused-vars
import React from "react";
import { heroBanner1 } from "../assets";
import AnimatedButton from "./AnimationButton";
import "./Header.css";
import "./Header.css";

const Header = () => {
  return (
    <section className={`header-sec relative w-full mx-auto`}>
      <div
        style={{
          height: "800px",
          backgroundPosition: "center",
          backgroundImage: `url(${heroBanner1})`,
        }}
      >
        <div>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed md:w-1/2 sm:w-full">
            <div className="flex h-full items-center justify-center">
              <div
                className="text-white absolute text-left max-w-md mx-auto p-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl"
                style={{ left: "10%" }}
              >
                <h2
                  className="mb-4 font-semibold text-base sm:text-lg md:text-4xl lg:text-4xl xl:text-6xl"
                  style={{ lineHeight: 1.2 }}
                >
                  Fast, Reliable, and Affordable Mobile Services
                </h2>
                <h4 className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl ">
                  Your one-stop solution for all mobile service needs.
                </h4>
                <AnimatedButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
