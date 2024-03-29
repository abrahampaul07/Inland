// // import React from "react";
// // import { useEffect } from "react";
// // import video from "../assets/video.mp4";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // const Hero = () => {
// //   useEffect(() => {
// //     AOS.init();
// //   }, []);

// // return (
// //   <div className="relative w-full h-screen">
// //     <video className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay playsInline>
// //       <source src={video} type="video/mp4" />
// //     </video>
// //     <div className="absolute inset-0 flex flex-col justify-center items-center">
// //       <h1 className="text-white font-bold text-4xl mt-[-150px] md:mt-0 md:text-[70px] lg:text-[122px] text-center opacity-light" data-aos="fade-up" data-aos-duration="3000">
// //         WE BUILD YOUR
// //       </h1>
// //       <h1 className=" text-5xl md:text-[80px] mt-[-5px] md:mt-[5px] lg:mt-[20px]  lg:text-[132px] text-center text-gold font-bold" data-aos="fade-left" data-aos-duration="2000">
// //         DREAM
// //       </h1>
// //     </div>
// //   </div>
// // );
// // };

// // export default Hero;

// // Hero.js
// import React, { useEffect } from "react";
// import video from "../assets/video.mp4";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div id="home" className="relative w-full h-screen mt-[0px] lg:mt-[70px]">
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         loop
//         muted
//         autoPlay
//         playsInline
//       >
//         <source src={video} type="video/mp4" />
//       </video>
//       <div className="absolute inset-0 flex flex-col justify-center items-center z-0">
//         <h1
//           className="text-white font-bold text-[40px] mt-[-120px] lg:mt-[-40px] md:mt-0 md:text-[70px] lg:text-[122px] text-center opacity-light"
//           data-aos="fade-up"
//           data-aos-duration="3000"
//           style={{ "font-family": "Nephilm" }}
//         >
//           WE BUILD YOUR
//         </h1>
//         <h1
//           className="text-5xl md:text-[80px] mt-[-7px] md:mt-[-20px] lg:mt-[-40px] lg:text-[132px] text-center text-gold font-bold"
//           data-aos="fade-left"
//           data-aos-duration="2000"
//           style={{ "font-family": "Nephilm" }}
//         >
//           DREAM
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect } from "react";
import video from "../assets/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    animateText();
  }, []);

  const animateText = () => {
    const lettersWE = document.querySelectorAll(".word-we .letter");
    const lettersBuildYour = document.querySelectorAll(".word-build-your .letter");
    const lettersDREAM = document.querySelectorAll(".word-dream .letter");
    let delay = 0;

    // Animate "WE"
    lettersWE.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("visible");
      }, index * 100);
    });

    // Animate "build your"
    lettersBuildYour.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("visible");
      }, (lettersWE.length + index) * 100);
    });

    // Animate "DREAM"
    lettersDREAM.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("visible");
        if (index === lettersDREAM.length - 1) {
          // After "DREAM" animation completes, reset the animation
          setTimeout(() => {
            // Remove "visible" class from all letters
            lettersWE.forEach(letter => letter.classList.remove("visible"));
            lettersBuildYour.forEach(letter => letter.classList.remove("visible"));
            lettersDREAM.forEach(letter => letter.classList.remove("visible"));
            // Restart animation loop
            animateText();
          }, 2000); // Adjust delay before restarting animation
        }
      }, (lettersWE.length + lettersBuildYour.length + index) * 100);
    });
  };

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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-4xl md:text-8xl lg:text-9xl z-0">
        <div className="text-white text-center mt-[-50px]" style={{ fontFamily: "Nephilm" }}>
          <div className="mb-4">
            <span className="word word-we">
              <span className="letter">W</span>
              <span className="letter">E</span>
            </span>&nbsp;
            <span className="word word-build-your">
              <span className="letter">B</span>
              <span className="letter">U</span>
              <span className="letter">I</span>
              <span className="letter">L</span>
              <span className="letter">D</span>
              &nbsp;
              <span className="letter">Y</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">R</span>
            </span>
          </div>
          <div className="mt-[-20px] lg:mt-[-20px]">
            <span className="word word-dream text-gold " style={{'fontFamily':'"Nephilm_Italic"'}}>
              <span className="letter">D</span>
              <span className="letter">R</span>
              <span className="letter">E</span>
              <span className="letter">A</span>
              <span className="letter">M</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
