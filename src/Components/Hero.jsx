// import React from "react";
// import { useEffect } from "react";
// import video from "../assets/video.mp4";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

// return (
//   <div className="relative w-full h-screen">
//     <video className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay playsInline>
//       <source src={video} type="video/mp4" />
//     </video>
//     <div className="absolute inset-0 flex flex-col justify-center items-center">
//       <h1 className="text-white font-bold text-4xl mt-[-150px] md:mt-0 md:text-[70px] lg:text-[122px] text-center opacity-light" data-aos="fade-up" data-aos-duration="3000">
//         WE BUILD YOUR
//       </h1>
//       <h1 className=" text-5xl md:text-[80px] mt-[-5px] md:mt-[5px] lg:mt-[20px]  lg:text-[132px] text-center text-gold font-bold" data-aos="fade-left" data-aos-duration="2000">
//         DREAM
//       </h1>
//     </div>
//   </div>
// );
// };

// export default Hero;

// Hero.js
import React, { useEffect } from "react";
import video from "../assets/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="home" className="relative w-full h-screen mt-[0px] lg:mt-[70px]">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-0">
        <h1
          className="text-white font-bold text-4xl mt-[-120px] lg:mt-[20px] md:mt-0 md:text-[70px] lg:text-[122px] text-center opacity-light"
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{ "font-family": "Nephilm" }}
        >
          WE BUILD YOUR
        </h1>
        <h1
          className="text-5xl md:text-[80px] mt-[-4px] md:mt-[5px] lg:mt-[30px] lg:text-[132px] text-center text-gold font-bold"
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{ "font-family": "Nephilm" }}
        >
          DREAM
        </h1>
      </div>
    </div>
  );
};

export default Hero;
