import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import "../App.css";

console.log(navLinks);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "backdrop-blur " : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p
            className={`${
              scrolled ? "text-gray-800" : "text-gray-800"
            } sm:hidden text-[18px] font-bold cursor-pointer flex`}
          >
            HexTech LTD &nbsp;
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-primary"
                  : scrolled
                  ? "text-gray-800"
                  : "text-white"
              } hover:text-violet-600 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } h-screen flex justify-center items-center mx-auto w-full p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:block">
          <h3
            className={`font-bold text-2xl ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            HexTech LTD
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
