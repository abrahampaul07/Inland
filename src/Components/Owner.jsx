// import React from "react";
// import owner from "../assets/owner.webp";
// import ReactPlayer from 'react-player/lazy';
// import video from "../assets/video.mp4";

// const Owner = () => {
//   return (
//     <div id="onwer" style={{ paddingTop: "40px" }} className="section flex justify-center items-center ">
//       <div className="max-w-full sm:max-w-5xl h-auto  shadow-lg rounded-lg overflow-hidden mx-5 my-8 flex flex-col sm:flex-row">
//         {/* Left side (Image) */}
//         <div className="w-full sm:w-1/2">
//           <img
//             className="m-auto"
//             src={owner}
//             alt="Image"
//             data-aos="zoom-in-up"
//             data-aos-duration="2000"
//           />
//         </div>
//         {/* Right side (Description) */}
//         <div
//           className="w-full sm:w-3/2 p-4 text-start m-auto"
//           data-aos="fade-in"
//           data-aos-duration="3000"
//         >
//           <h1 className="mb-3 font-bold text-2xl text-center md:text-left lg:text-left md:border-l-[5px] lg:border-l-[5px] border-gold" data-aos="fade-up" data-aos-duration="1000">
//             &nbsp;THE CHAIRMAN
//           </h1>
//           <p className="text-gray-700 font-bold text-center md:text-left lg:text-left text-gold text-2xl uppercase" data-aos="fade-up" data-aos-duration="2000">
//             Mohammed Shafiq
//           </p>
//           <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
//             <p className="text-blue-500 font-FilsonProLight text-base md:text-sm lg:text-base text-justify md:text-left ">
// Mohammed Shafiq has been the frontier in the realty sector since
// two decades, envisaged in this field of real estate development &
// construction, Mohammed Shafiq’s journey began in a small city of
// Karnataka – “Bangalore” wherein he’s moved quiet a number of
// families to homes, flats & Bungalow’s.{" "}
// <span>
//   <br />
//   <br />
// </span>{" "}
// Mohammed Shafiq has more than 20 years of experience in the
// real-estate world, a concept leader in various other business
// wherein Mohammed Shafiq formulated his companies under the brand
// “RUBY”. <span><br /><br /></span> Mr. Shafiq has more than 20 years of experience of multi
// successful businesses and has pioneered his passion into reality…
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Owner;

// import React from "react";
// import Slider from "react-slick";
// import mamu from "../assets/owner.webp";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Owner = () => {
//   // Sample data for a single card
//   const cardData = [
//     {
//       title: "THE CHAIRMAN",
//       name: "Mohammed Shafiq",
//       description:
//         'Mohammed Shafiq has been the frontier in the realty sector since two decades, envisaged in this field of real estate development & construction, Mohammed Shafiq’s journey began in a small city of Karnataka – “Bangalore” wherein he’s moved quiet a number of families to homes, flats & Bungalow’s',
//       description2: ' Mr. Shafiq has more than 20 years of experience of multi successful businesses and has pioneered his passion into reality…',
//       description3: 'Mohammed Shafiq has more than 20 years of experience in the real-estate world, a concept leader in various other business wherein Mohammed Shafiq formulated his companies under the brand “RUBY”.'
//     },
//     {
//       title: "THE CHAIRMAN2",
//       name: "Mohammed Shafiq",
//       description:
//         'Mohammed Shafiq has been the frontier in the realty sector since two decades, envisaged in this field of real estate development & construction, Mohammed Shafiq’s journey began in a small city of Karnataka – “Bangalore” wherein he’s moved quiet a number of families to homes, flats & Bungalow’s',
//       description2: ' Mr. Shafiq has more than 20 years of experience of multi successful businesses and has pioneered his passion into reality…',
//       description3: 'Mohammed Shafiq has more than 20 years of experience in the real-estate world, a concept leader in various other business wherein Mohammed Shafiq formulated his companies under the brand “RUBY”.'
//     },
//     {
//       title: "THE CHAIRMAN3",
//       name: "Mohammed Shafiq",
//       description:
//         'Mohammed Shafiq has been the frontier in the realty sector since two decades, envisaged in this field of real estate development & construction, Mohammed Shafiq’s journey began in a small city of Karnataka – “Bangalore” wherein he’s moved quiet a number of families to homes, flats & Bungalow’s',
//       description2: ' Mr. Shafiq has more than 20 years of experience of multi successful businesses and has pioneered his passion into reality…',
//       description3: 'Mohammed Shafiq has more than 20 years of experience in the real-estate world, a concept leader in various other business wherein Mohammed Shafiq formulated his companies under the brand “RUBY”.'
//     },
//   ]

//   // Number of cards you want to display
//   const numberOfCards = 3;

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Autoplay enabled
//     autoplaySpeed: 3000, // Autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
//   };

//   return (
//     <div
//       id="owner"
//       className="mt-[50px] mb-[50px] flex justify-center items-center"
//     >
//       <Slider {...settings} className="max-w-full sm:max-w-5xl">
//         {/* Render multiple cards */}
//         {[...Array(numberOfCards)].map((_, index) => (
//           <div key={index} className="flex justify-center items-center">
//             <div className="max-w-full h-auto bg-white shadow-md rounded-lg overflow-hidden mx-5 my-8 flex flex-col sm:flex-row">
//               {/* Left side (Image) */}
//               <div className="w-full sm:w-1/2">
//                 <img
//                   className="m-auto"
//                   src={mamu}
//                   alt="Image"
//                   data-aos="zoom-in-up"
//                   data-aos-duration="3000"
//                 />
//               </div>
//               {/* Right side (Description) */}
//               <div
//                 className="w-full sm:w-3/2 p-4 text-start m-auto"
//                 data-aos="fade-in"
//                 data-aos-duration="3000"
//               >
//                 <h1
//                   className="mb-3 font-bold text-2xl text-center lg:text-left lg:border-l-[5px] border-gold"
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                 >
//                   &nbsp;{cardData.title}
//                 </h1>
//                 <p
//                   className="text-gray-700 font-bold text-center lg:text-left text-gold text-2xl uppercase"
//                   data-aos="fade-up"
//                   data-aos-duration="2000"
//                 >
//                   {cardData.name}
//                 </p>
//                 <div
//                   className="mt-4"
//                   data-aos="fade-up"
//                   data-aos-duration="3000"
//                 >
//                   <p className="text-blue-500 text-base md:text-sm lg:text-base text-center md:text-left">
//                     {cardData.description}
//                   </p>
//                   <br />
//                   <p className="text-blue-500 text-base md:text-sm lg:text-base text-center md:text-left">
//                     {cardData.description2}
//                   </p>
//                   <br />
//                   <p className="text-blue-500 text-base md:text-sm lg:text-base text-center md:text-left">
//                     {cardData.description3}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Owner;


import React from "react";
import Slider from "react-slick";
import mamu from "../assets/owner.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Owner = () => {
  // Sample data for multiple cards
  const cardData = [
    {
      title: "MANAGING DIRECTOR",
      name: "SALMAN Khalid sheriff",
      description:
        'Salman Khalid Sheriff boasts a rich, three-decade-long career in construction and development, with a profound expertise in real estate',
      description2: 'Throughout his career, he has collaborated with esteemed companies such as IBC and Platinum Builders, consistently delivering exceptional results.',
    },
    {
      title: "CHAIRMAN",
      name: "Mohammed Shafiq",
      description:
        'Mohammed Shafiq has been the frontier in the realty sector since two decades, envisaged in this field of real estate development & construction, Mohammed Shafiq’s journey began in a small city of Karnataka – “Bangalore” wherein he’s moved quiet a number of families to homes, flats & Bungalow’s',
      description2: ' Mr. Shafiq has more than 20 years of experience of multi successful businesses and has pioneered his passion into reality…',
      description3: 'Mohammed Shafiq has more than 20 years of experience in the real-estate world, a concept leader in various other business wherein Mohammed Shafiq formulated his companies under the brand “RUBY”.'
    },
    {
      title: "DIRECTOR",
      name: "ABHIJITH Sadashivaiah",
      description:
        'Seeking hands-on experience in International Business law with meticulous attention to detail, driven by a strong determination to succeed.',
      description2: ' Known for his proficiency in court procedures and resource networking, Abhijith is a compassionate advocate & a valuable asset in legal settings.',  },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div
      id="owner"
      className=" flex justify-center  items-center"
    >
      <Slider {...settings} className="max-w-full md:w-full sm:max-w-5xl">
        {/* Render multiple cards dynamically */}
        {cardData.map((data, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="max-w-full h-auto bg-white shadow-md rounded-lg overflow-hidden mx-5 my-8 flex flex-col sm:flex-row">
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
                <h1
                  className="mb-3 font-bold text-2xl text-center lg:text-left lg:border-l-[5px] border-gold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  &nbsp;{data.title}
                </h1>
                <p
                  className="text-gray-700 font-bold text-center lg:text-left text-gold text-2xl uppercase"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {data.name}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p className="text-blue-500 text-base md:text-sm lg:text-base text-center md:text-left">
                    {data.description}
                  </p>
                  <br />
                  <p className="text-blue-500 text-base md:text-sm lg:text-base text-center md:text-left">
                    {data.description2}
                  </p>
                  <br />
                  <p className="text-blue-500 text-base md:text-sm lg:text-base text-center md:text-left">
                    {data.description3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Right arrow component
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...props.style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

// Left arrow component
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...props.style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};


export default Owner;
