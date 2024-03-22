import React, { useState } from "react";
import inland from '../assets/inland.png'
import logo from '../assets/logo.webp'
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 md:p-2 bg-white shadow md:flex md:items-center md:justify-between z-10 md:fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img
            className="h-[50px] pr-3 inline"
            src={inland}
            alt="logo"
          />

<img
            className="h-10 inline"
            src={logo}
            alt="logo"
          />
        </span>
        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </span>
      </div>
      <ul
        className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full md:h-0 h-screen left-0 md:w-auto md:py-0 md:py-4 py-20 md:pl-0 pl-1 md:opacity-100 ${
          isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 h-0"
        } transition-all ease-in duration-500`}
      >
        <li className="mx-4 my-11 md:my-0">
          <Link to="#home" smooth className="text-xl text-icon hover:text-cyan-500 duration-500">
            HOME
          </Link>
        </li>
        <li className="mx-4 my-11 md:my-0">
          <Link to="#about" smooth className="text-xl text-icon hover:text-cyan-500 duration-500">
            ABOUT
          </Link>
        </li>
        <li className="mx-4 my-11 md:my-0">
          <Link to="#services" smooth className="text-xl text-icon hover:text-cyan-500 duration-500">
            SERVICES
          </Link>
        </li>
        <li className="mx-4 my-11 md:my-0">
          <Link to="#project" smooth className="text-xl text-icon hover:text-cyan-500 duration-500">
            PROJECTS
          </Link>
        </li>
        <li className="mx-4 my-11 md:my-0">
          <Link to="#contact" smooth className="text-xl text-icon hover:text-cyan-500 duration-500">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
