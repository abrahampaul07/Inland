import React from "react";
import owner from "../assets/owner.webp";
import ReactPlayer from 'react-player/lazy';
import video from "../assets/video.mp4";



const Owner = () => {
  return (
    <div id="onwer" style={{ paddingTop: "40px" }} className="section flex justify-center items-center ">
      <div className="max-w-full sm:max-w-5xl h-auto bg-white shadow-md rounded-lg overflow-hidden mx-5 my-8 flex flex-col sm:flex-row">
        {/* Left side (Image) */}
        <div className="w-full sm:w-1/2">
          <img
            className="m-auto"
            src={owner}
            alt="Image"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          />
        </div>
        {/* Right side (Description) */}
        <div
          className="w-full sm:w-3/2 p-4 text-start m-auto"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          <h1 className="mb-3 font-bold text-2xl text-center md:text-left lg:text-left md:border-l-[5px] lg:border-l-[5px] border-gold" data-aos="fade-up" data-aos-duration="1000">
            &nbsp;THE CHAIRMAN
          </h1>
          <p className="text-gray-700 font-bold text-center md:text-left lg:text-left text-gold text-2xl uppercase" data-aos="fade-up" data-aos-duration="2000">
            Mohammed Shafiq
          </p>
          <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
            <p className="text-blue-500 font-FilsonProLight text-base md:text-sm lg:text-base">
              Mohammed Shafiq has been the frontier in the realty sector since
              two decades, envisaged in this field of real estate development &
              construction, Mohammed Shafiq’s journey began in a small city of
              Karnataka – “Bangalore” wherein he’s moved quiet a number of
              families to homes, flats & Bungalow’s.{" "}
              <span>
                <br />
                <br />
              </span>{" "}
              Mohammed Shafiq has more than 20 years of experience in the
              real-estate world, a concept leader in various other business
              wherein Mohammed Shafiq formulated his companies under the brand
              “RUBY”. <span><br /><br /></span> Mr. Shafiq has more than 20 years of experience of multi
              successful businesses and has pioneered his passion into reality…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
