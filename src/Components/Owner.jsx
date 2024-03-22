import React from "react";
import mamu from "../assets/owner.webp";
import ReactPlayer from 'react-player/lazy';
import video from "../assets/video.mp4";



const Owner = () => {
  return (
    <div className="flex justify-center items-center mt-[100px] mb-[100px]">
      <div className="max-w-full sm:max-w-5xl h-auto bg-white shadow-md rounded-lg overflow-hidden mx-5 my-8 flex flex-col sm:flex-row">
        {/* Left side (Image) */}
        <div className="w-full sm:w-1/2">
          <img
            className="m-auto"
            src={mamu}
            alt="Image"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          />
        </div>
        {/* Right side (Description) */}
        <div
          className="w-full sm:w-3/2 p-4 text-start m-auto"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          <h1 className="  mb-2 font-bold text-2xl border-l-[5px] border-gold" data-aos="fade-up" data-aos-duration="1000">
            &nbsp; THE CHAIRMAN
          </h1>
          <p className="text-gray-700 font-bold text-gold text-2xl uppercase" data-aos="fade-up" data-aos-duration="2000">
            Mohammed Shafiq
          </p>
          <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
            <p className="text-blue-500  text-sm">
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
              “RUBY”.Mr. Shafiq has more than 20 years of experience of multi
              successful businesses and has pioneered his passion into reality…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
