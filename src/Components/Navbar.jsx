import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import inland_logo from "../assets/inland.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="text-drm bg-white uppercase ">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8"> 
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex gap-1">
              <img src={inland_logo} alt="inland_logo" className="h-[50px] " />
              <img src={logo} alt="logo" className="h-11" />
            </div>
          </div>
          <div className="hidden md:flex items-center  justify-end w-full ml-10">
            <a
              href="/"
              className="text-gold-500 text-[16px] hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gold-300 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-[16px]  font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gold-300 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-[16px] font-medium"
            >
              Contact
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="text-gold inline-flex items-center justify-center p-2 rounded-md hover:bg-gold-700 focus:outline-none focus:bg-gray-700"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsive menu */}
      <div
        className={`md:hidden ${isOpen ? "" : "hidden"} transition-transform duration-300 ease-in-out`}
        style={{ transform: isOpen ? "translateY(0)" : "translateY(-100%)" }}
      >
         <div className="h-screen pt-[150px] space-y-5 sm:px-3 ">
          <a
            href="/"
            className="text-gray-300 hover:bg-gold-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:bg-gold-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
