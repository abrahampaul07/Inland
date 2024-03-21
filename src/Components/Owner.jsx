// import React from "react";

// const Owner = () => {
//   return (
//     <>

//       <div className="max-w-sm w-full lg:max-w-full lg:flex md:flex-row flex-col justify-center mt-[70px] md:mt-[160px] mb-[160px] ">
//       <div className="text-gray-900 mb-[30px] mr-[140px] text-xl border-l-[5px] border-gold md:hidden inline">
//               THE CHAIRMAN
//             </div>
//         <div
//           className="h-96 m-auto md:m-0 w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg overflow-hidden"
//           style={{
//             backgroundImage: `url(${mamu})`,
//           }}
//           title="Woman holding a mug"
//         ></div>
//         <div
//           className=" w-full lg:w-1/2
//          bg-white rounded-b lg:rounded-b-none rounded-r p-4 flex flex-col
//           leading-normal shadow-lg "
//         >
//           <div className="mb-8 text-start">
//             <div className="text-gray-900 ml-5 md:ml-5 text-xl mb-2 border-l-[5px] border-gold hidden md:block">
//               &nbsp; THE CHAIRMAN
//             </div>
//             <div className="text-gray-900 font-bold text-2xl ml-1  md:text-3xl mb-2 uppercase text-gold">
//               &nbsp; Mohammed Shafiq
//             </div>

//             <p className="text-gray-700 p-1 md:pl-5 text-xs md:text-1xl text-justify">
//               Mohammed Shafiq has been the frontier in the realty sector since
//               two decades, envisaged in this field of real estate development &
//               construction, Mohammed Shafiq’s journey began in a small city of
//               Karnataka – “Bangalore” wherein he’s moved quiet a number of
//               families to homes, flats & Bungalow’s.
//               <span>
//                 <br />
//                 <br />
//               </span>
//               Mohammed Shafiq has more than 20 years of experience in the
//               real-estate world, a concept leader in various other business
//               wherein Mohammed Shafiq formulated his companies under the brand
//               “RUBY”. Mr. Shafiq has more than 20 years of experience of multi
//               successful businesses and has pioneered his passion into reality…
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Owner;

import React from "react";
import mamu from "../assets/owner.webp";

const Owner = () => {
  return (
    <div className="flex justify-center items-center mb-9">
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
          <h2 className="  mb-2 font-bold text-1xl border-l-[5px] border-gold" data-aos="fade-up" data-aos-duration="1000">
            &nbsp; THE CHAIRMAN
          </h2>
          <p className="text-gray-700 font-bold text-gold text-2xl uppercase" data-aos="fade-up" data-aos-duration="2000">
            Mohammed Shafiq
          </p>
          <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
            <a href="#" className="text-blue-500 hover:underline text-sm">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
