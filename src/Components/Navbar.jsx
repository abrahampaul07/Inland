

// import React, { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import logo from '../assets/vertical_Logo.svg'
// import logo2 from '../assets/logo2.png'
// import './Navbar.css'; // Import the CSS file for styling

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="p-4 lg:p-5 md:p-5 bg-white shadow md:flex md:items-center justify-between md:justify-evenly z-10 md:fixed  top-0 left-0 right-0">
//       <div className="flex justify-between items-center">
//         <span className="text-2xl cursor-pointer relative md:absolute top-0 md:top-1 shadow-none md:shadow-md bg-white p-1 ">
//          <a href="/"> <img
//             className="h-[40px] md:h-[80px] lg:h-[80px] w-20 hidden md:flex"
//             src={logo}
//             alt="logo"
//           /></a>
//            <a href="/"> <img
//             className="h-[40px] lg:h-[50px] flex md:hidden"
//             src={logo2}
//             alt="logo"
//           /></a>
//         </span>
//         <span
//           className="text-3xl text-gold cursor-pointer mx-2 md:hidden block"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? (
//             <ion-icon name="close"></ion-icon>
//           ) : (
//             <ion-icon name="menu"></ion-icon>
//           )}
//         </span>
//       </div>
//       <ul
//         className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full md:h-0 h-screen left-0 md:w-auto m  md:py-4 py-20 md:pl-0 pl-1 md:opacity-100 ${
//           isMenuOpen ? "opacity-100 top-[60px]" : "opacity-0 h-0"
//         } transition-all ease-in duration-500`}
//       >
//         <NavItem to="#home" onClick={() => setActiveLink("#home")} active={activeLink === "#home"} onCloseMenu={closeMenu}>HOME</NavItem>
//         <NavItem to="#about" onClick={() => setActiveLink("#about")} active={activeLink === "#about"} onCloseMenu={closeMenu}>ABOUT</NavItem>
//         <NavItem to="#services" onClick={() => setActiveLink("#services")} active={activeLink === "#services"} onCloseMenu={closeMenu}>SERVICES</NavItem>
//         <NavItem to="#projects" onClick={() => setActiveLink("#projects")} active={activeLink === "#projects"} onCloseMenu={closeMenu}>PROJECTS</NavItem>
//         <NavItem to="#contact" onClick={() => setActiveLink("#contact")} active={activeLink === "#contact"} onCloseMenu={closeMenu}>CONTACT</NavItem>
//       </ul>
//     </nav>
//   );
// }

// // Component for each navigation item
// const NavItem = ({ to, active, onClick, onCloseMenu, children }) => (
//   <li className="mx-4 my-11 md:my-0">
//     <Link to={to} smooth onClick={() => { onClick(); onCloseMenu(); }} className={`text-l font-bold ${active ? "text-gold underline-animation" : "text-black"} hover:text-gold duration-500`}>
//       {children}
//     </Link>
//   </li>
// );

// export default Navbar;


import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from '../assets/logo_final.svg'
import logo2 from '../assets/logo2.png'
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const services = document.getElementById("services");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (contact && scrollPosition >= contact.offsetTop) {
        setActiveLink("#contact");
      } else if (projects && scrollPosition >= projects.offsetTop) {
        setActiveLink("#projects");
      } else if (services && scrollPosition >= services.offsetTop) {
        setActiveLink("#services");
      } else if (about && scrollPosition >= about.offsetTop) {
        setActiveLink("#about");
      } else if (home && scrollPosition >= home.offsetTop) {
        setActiveLink("#home");
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav className="p-2 lg:p-5 md:p-5 bg-white shadow md:flex md:items-center justify-between md:justify-around lg:justify-evenly z-10 md:fixed  top-0 left-0 right-0">
      <div className="flex justify-between items-center">
        <span className="text-2xl cursor-pointer relative md:absolute top-0 md:top-1 shadow-none md:shadow-md bg-white p-1 ">
         <a href="/"> <img
            className="h-[40px] md:h-[80px] lg:h-[100px] w-20 hidden md:flex"
            src={logo}
            alt="logo"
          /></a>
           <a href="/"> <img
            className="h-[40px] lg:h-[50px] flex md:hidden"
            src={logo2}
            alt="logo"
          /></a>
        </span>
        <span
          className="text-3xl text-gold cursor-pointer mx-2 md:hidden block"
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
        className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full md:h-0 h-screen left-0 md:w-auto m  md:py-4 py-20 md:pl-0 pl-1 md:opacity-100 ${
          isMenuOpen ? "opacity-100 top-[60px]" : "opacity-0 h-0"
        } transition-all ease-in duration-500`}
      >
        <NavItem to="#home" active={activeLink === "#home"} onCloseMenu={closeMenu}>HOME</NavItem>
        <NavItem to="#about" active={activeLink === "#about"} onCloseMenu={closeMenu}>ABOUT</NavItem>
        <NavItem to="#services" active={activeLink === "#services"} onCloseMenu={closeMenu}>SERVICES</NavItem>
        <NavItem to="#projects" active={activeLink === "#projects"} onCloseMenu={closeMenu}>PROJECTS</NavItem>
        <NavItem to="#contact" active={activeLink === "#contact"} onCloseMenu={closeMenu}>CONTACT</NavItem>
      </ul>
    </nav>
  );
}

// Component for each navigation item
const NavItem = ({ to, active, onCloseMenu, children }) => (
  <li className="mx-4 my-11 md:my-0">
    <Link to={to} smooth onClick={onCloseMenu} className={`text-l font-bold ${active ? "text-gold underline-animation" : "text-black"} hover:text-gold duration-500`}>
      {children}
    </Link>
  </li>
);

export default Navbar;
