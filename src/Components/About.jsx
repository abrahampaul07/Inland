// import React, { useEffect } from "react";
// import img from "../assets/main.jpg";
// import { FaRegBuilding } from "react-icons/fa";
// import { BsBuildings } from "react-icons/bs";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init(); // Remove once: true option to allow animations on every scroll
//   }, []);

//   return (
//     <div
//       id="about"
//       className="section flex flex-col-reverse lg:flex-row  ml-3 md:m-[40px] mr-3 justify-evenly gap-9 lg:gap-0 mb-6"
//       data-aos="fade-up"
//       data-aos-duration="1000"
//       style={{ paddingTop: "100px" }}
//     >
//       <div
//         className="flex md:justify-center "
//         data-aos="fade-right"
//         data-aos-duration="000"
//       >
//         <span className="border-[15px] h-[450px] md:mt-[30px] md:ml-[110px] lg:ml-0 lg:mt-7  mt-[10px] lg:h-[580px] w-[340px] lg:w-[440px] border-gold absolute top-0 left-7 z-0"></span>
//         <img
//           src={img}
//           alt=""
//           style={{ zIndex: 1 }}
//           className=" relative z-10 h-[440px] lg:h-[560px] w-[340px] lg:w-[420px] top-[-16px] md:top-[5px]"
//         />

//         {/* <img src={img} alt="image" data-aos="zoom-in-down" data-aos-duration="3000"/> */}
//       </div>
//       <div className="flex flex-col text-start space-y-5 lg:space-y-9 justify-center w-full lg:w-1/2">
//         <h1
//           className=" border-l-[5px] border-gold uppercase font-bold text-2xl "
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           &nbsp;About <span className="text-gold">US</span>
//         </h1>
//         <h1
//           className="font-bold text-2xl text-gold lg:text-4xl"
//           data-aos="fade-up"
//           data-aos-duration="2000"
//         >
//           COMMITTED TO ONLY HIGH QUALITY SERVICE
//         </h1>

//         <div className="icons-content flex gap-2 md:gap-[40px]  border-b-[1px] border-t-[1px] border-gold p-5 ">
//           <div
//             className="cont1 flex items-center font-bold text-xs lg:text-2xl ml-0 md:ml-[100px] lg:ml-0"
//             data-aos="fade-right"
//             data-aos-duration="2000"
//           >
//             <p className="text-gold text-3xl lg:text-7xl">
//               <FaRegBuilding />
//             </p>
//             <p className="pl-2">BUILDING QUALITY STANDARDS</p>
//           </div>
//           <div
//             className="cont2 flex items-center font-bold text-xs lg:text-2xl "
//             data-aos="fade-left"
//             data-aos-duration="2000"
//           >
//             <p className="text-gold text-3xl lg:text-7xl ">
//               <BsBuildings />
//             </p>
//             <p className="pl-2">DESIGN & BUILD PACKAGE</p>
//           </div>
//         </div>

//         <p className="text-blue-500  text-sm md:text-base">
//           There are many variations of passages of Lorem Ipsum available, but
//           the majority have suffered alteration in some form, by injected
//           humour, or randomised words which don’t look even slightly believable.
//           Lorem Ipsum is simply dummy text of the printing and typesetting.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

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
    <div
      id="about"
      className="section bg-crm  lg:h-[100vh] flex flex-col-reverse lg:flex-row m-auto   justify-evenly gap-9 lg:gap-0 mb-6"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ paddingTop: "100px" }}
    >
      <div
        className="flex md:justify-center m-auto"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {/* <span className="border-[15px] h-[450px] md:mt-[30px] md:ml-[110px] lg:ml-0 lg:mt-7  mt-[10px] lg:h-[580px] w-[340px] lg:w-[440px] border-gold absolute top-0 left-7 z-0"></span> */}
        <img
          src={img}
          alt=""
          style={{ zIndex: 1 }}
          className=" relative z-10 h-[440px] md:h-[530px] lg:h-[530px] w-[340px] lg:w-[420px] top-[-16px] md:top-[-20px]"
        />

        {/* <img src={img} alt="image" data-aos="zoom-in-down" data-aos-duration="3000"/> */}
      </div>
      <div className="flex flex-col text-start space-y-5 lg:space-y-9 justify-center w-full lg:w-1/2 p-3">
        <h1
          className=" border-l-[5px] border-gold uppercase font-bold text-2xl ml-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          &nbsp;OUR <span className="text-gold">STORY</span>
        </h1>
        <p className="p-3 flex justify-end text-sm md:text-md lg:text-md" style={{'font-family':'FilsonProLight'}} data-aos="fade-up" data-aos-duration="000">
          INLAND is a leading construction company specializing in a wide range
          of residential and commercial construction projects. With years of
          experience in the industry, we have built a strong reputation for
          delivering high-quality construction services while meeting client
          specifications and exceeding expectations. We are dedicated to
          delivering projects on time, within budget, and with exceptional
          attention to detail.
          <br />
          <br />
          At INLAND, we prioritize quality in every aspect of our work. We
          utilize the finest construction materials and employ skilled craftsmen
          who take pride in their workmanship. Our attention to detail and
          commitment to excellence set us apart from the competition. We strive
          to deliver exceptional results that enhance the value and
          functionality of our clients' properties.
        </p>
      </div>
    </div>
  );
};

export default About;
