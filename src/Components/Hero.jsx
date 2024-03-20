import React from "react";
import { useEffect } from "react";
import video from "../assets/video.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="relative flex">
      <video width="100%" loop muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
      {/* <motion.div
              variants= {slideIn('left','tween',0.2,1)}> */}
      <h1 className="absolute items-start top-[200px] text-white font-bold text-[40px]" data-aos="fade-right" data-aos-duration="3000">
        WE BUILD YOUR
      </h1>
      <h1 className="absolute top-[200px] left-[100px] text-white font-bold text-[120px]" data-aos="fade-left" data-aos-duration="2000">
        DREAM
      </h1>
      {/* </motion.div> */}
    </div>
  );
};

export default Hero;
