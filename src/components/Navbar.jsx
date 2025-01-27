import React, { useState } from "react";
import logo from "../assets/Logo.png";
import world from "../assets/world.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white z-50 shadow-md md:text-base text-sm font-livvic font-semibold fixed container w-full md:top-8 top-4 rounded-[20px] starting:h-auto h-fit mx-auto right-1/2 translate-x-1/2">
      <div className="w-fit mx-auto md:py-5 py-3.5 flex justify-between items-center">
        <div className="flex items-center space-x-3 md:w-[17%] w-[35%]">
          <img src={logo} alt="Logo" className="w-full object-contain" />
        </div>
        <div className="hidden uppercase lg:flex mx-auto gap-14 items-center justify-center w-fit">
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            About Us
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 cursor-pointer text-gray-700 uppercase hover:text-green-600 transition-colors"
            >
              Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className={`w-5 h-5 ml-1   transition-all ease-in-out duration-300 ${
                  isDropdownOpen ? "rotate-180 " : "rotate-0 "
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-[45%] w-max rounded-lg px-2 py-2 flex flex-col gap-4 shadow-lg bg-white overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpen ? "opacity-100 " : "opacity-0 "
              }`}
            >
              <a
                href="#"
                className="block px-6 w-full py-2 hover:bg-secondary rounded-lg hover:text-white transition-all ease-in-out duration-300"
              >
                Product 1
              </a>
              <a
                href="#"
                className="block px-6 w-full py-2 hover:bg-secondary rounded-lg hover:text-white transition-all ease-in-out duration-300"
              >
                Product 2
              </a>
            </div>
          </div>
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
        <button className="bg-secondary uppercase text-white py-3 px-4 w-fit lg:block hidden rounded-full">
          <span className="flex items-center gap-2">
            <img src={world} alt="Language" className="w-[40%]" />
            <p>en</p>
          </span>
        </button>
        <div className="wrap flex items-center gap-2">
          <button className="bg-secondary text-white py-1.5 px-3 w-fit lg:hidden rounded-full">
            <div className="flex items-center justify-center gap-2">
              <img src={world} alt="Language" className="w-[35%]" />
              <p>en</p>
            </div>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Drop down */}
      <div
        className={`lg:hidden overflow-hidden transition-all  duration-500 ease-in-out  ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 pb-4"
            : "max-h-0 opacity-0 pb-0"
        }`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
        >
          About Us
        </a>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center gap-3 text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
          >
            Product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${
              isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-lg py-2 px-8">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
              >
                Product 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
              >
                Product 2
              </a>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
        >
          Blog
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
        >
          Contact Us
        </a>
      </div>
      {/* Mobile Drop down End */}
    </nav>
  );
};

export default Navbar;
