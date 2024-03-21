import React from "react";
import { useEffect } from "react";
import video from "../assets/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
//   return (
//     <div className="relative flex text-center justify-center items-center">
//       <video loop muted autoPlay className="opacity-90 ">
//         <source src={video} type="video/mp4" />
//       </video>

//       <h1
//         className="absolute top-[65px] md:top-[240px] text-white font-bold text-3xl md:text-8xl "
//         data-aos="fade-right"
//         data-aos-duration="3000"
//       >
//         WE BUILD YOUR
//       </h1>

//       <h1
//         className="absolute top-[90px] md:top-[320px] text-gold font-bold text-4xl md:text-9xl"
//         data-aos="fade-left"
//         data-aos-duration="3000"
//       >
//         DREAM
//       </h1>
//     </div>
//   );
// };


return (
  <div className="relative w-full h-screen">
    <video className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay>
      <source src={video} type="video/mp4" />
    </video>
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <h1 className="text-white font-bold text-5xl mt-[-150px] md:mt-0 md:text-[70px] lg:text-[122px] text-center" data-aos="fade-up" data-aos-duration="3000">
        WE BUILD YOUR
      </h1>
      <h1 className=" text-5xl md:text-[80px] mt-[-10px] md:mt-[-20px] lg:mt[-75px]  lg:text-[132px] text-center text-gold font-bold" data-aos="fade-left" data-aos-duration="2000">
        DREAM
      </h1>
    </div>
  </div>
);
};

export default Hero;
