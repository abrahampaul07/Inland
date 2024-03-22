import React, { useEffect } from "react";
import img from "../assets/main.jpg";
import { FaRegBuilding } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init(); // Remove once: true option to allow animations on every scroll
  }, []);

  return (
    <>
      <div
        className=" flex flex-col-reverse lg:flex-row lg:m-[50px] mt-10 ml-3 md:m-[40px] mr-3 justify-evenly gap-9 lg:gap-0 mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex md:justify-center   ">
          <span className="border-[15px] h-[450px] md:mt-[310px] md:ml-[110px] lg:ml-0 lg:mt-7 mt-[350px] lg:h-[580px] w-[340px] lg:w-[440px] border-gold absolute top-0 left-7 z-0"></span>
          <img
            src={img}
            alt=""
            style={{ zIndex: 1 }}
            className=" relative z-10 h-[420px] lg:h-[560px] w-[340px] lg:w-[420px] top-[-16px] md:top-[5px]"
          />

          {/* <img src={img} alt="image" data-aos="zoom-in-down" data-aos-duration="3000"/> */}
        </div>
        <div className="flex flex-col text-start space-y-5 lg:space-y-9 justify-center w-full lg:w-1/2">
          <h1
            className=" border-l-[5px] border-gold uppercase font-bold text-2xl "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            &nbsp;Get to know us
          </h1>
          <h1
            className="font-bold text-2xl text-gold lg:text-4xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            COMMITTED TO ONLY HIGH QUALITY SERVICE
          </h1>

          <div className="icons-content flex gap-2 md:gap-[40px]  border-b-[1px] border-t-[1px] border-gold p-5 ">
            <div
              className="cont1 flex items-center font-bold text-xs lg:text-2xl ml-0 md:ml-[100px] lg:ml-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="text-gold text-3xl lg:text-7xl">
                <FaRegBuilding />
              </p>
              <p className="pl-2">BUILDING QUALITY STANDARDS</p>
            </div>
            <div
              className="cont2 flex items-center font-bold text-xs lg:text-2xl "
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <p className="text-gold text-3xl lg:text-7xl ">
                <BsBuildings />
              </p>
              <p className="pl-2">DESIGN &. BUILD PACKAGE</p>
            </div>
          </div>

          <p className="text-blue-500  text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. Lorem Ipsum is simply dummy text of the printing and
            typesetting.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
