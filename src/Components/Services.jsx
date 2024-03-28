// // import React from "react";
// // import { Carousel } from "react-responsive-3d-carousel";
// // import { ServiceData } from "./constants";

// // export default function Services() {
// //   return (
// //     <div id="services" style={{ paddingTop: "100px" }} className="section">
// //       <h1
// //         className="border-l-[5px] flex ml-[20px] lg:ml-[110px]  border-gold uppercase font-bold text-2xl mb-4"
// //         data-aos="fade-up"
// //         data-aos-duration="1000"
// //       >
// //         &nbsp;OUR <span className="text-gold">&nbsp;SERVICES</span>
// //       </h1>

// //       <div className="p-5 h-auto">
// //         <Carousel>
// //           {ServiceData.map((items) => (
// //             <>
// //             <img
// //               src={items.backgroundImage}
// //               alt="sample-image"
// //               style={{
// //                 width: "100%",
// //                 height: "100%",
// //                 objectFit: "cover",
// //               }}
// //             />
// //             <div className="absolute inset-0  " />
// //             <div className="relative flex flex-col gap-3">
// //               {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
// //               <h1 className="text-[24px] lg:text-[34px] absolute mt-2 ml-[90px] lg:ml-2 top-[0px] lg:top-2 uppercase bg-transparent  rounded text-black font-bold text-start lg:text-3xl">
// //                 {items.title}{" "}
// //               </h1>
// //               <p className="lg:text-[10px] text-[0px] font-bold  text-white mt-[-14px] text-start">
// //                 {items.content}{" "}
// //               </p>
// //             </div>
// //             </>
// //           ))}

// //         </Carousel>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import serv1 from '../assets/serv1.jpg'
// import serv2 from '../assets/serv2.jpg'
// import serv3 from '../assets/serv3.jfif'

// const Card = ({ title, imageUrl, content, index, expandedState, setExpandedState }) => {
//   const isExpanded = expandedState[index];

//   const toggleExpand = () => {
//     const newExpandedState = [...expandedState];
//     newExpandedState[index] = !isExpanded;
//     setExpandedState(newExpandedState);
//   };

//   return (

//       <div className={`max-w-sm rounded overflow-hidden  shadow-lg m-3 ${isExpanded ? 'expanded' : ''}`}>
//       <img className="w-full" src={imageUrl} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <div className="text-gray-700 text-base">{isExpanded ? content : `${content.substring(0, 100)}...`}</div>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <button
//           className="inline-block bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
//           onClick={toggleExpand}
//         >
//           {isExpanded ? 'Read Less' : 'Read More'}
//         </button>
//       </div>
//     </div>

//   );
// };

// const Services = () => {
//   const [expandedState, setExpandedState] = useState(new Array(3).fill(false)); // Assuming you have 3 cards

// const data = [
//   {
//     title: 'Preconstruction Planning',
//     imageUrl: serv1,
//     content: "Specially Designed by International landscape Architects. We are creating Mini Forests in AUREA OASIS with different trees which provides more Oxygen, Purified Air, Attracting Varieties of birds, and Butterflies. Jogging Tracks, Pedestrian Walking Areas, Villas are designed with unique elevations without replications and with unique floor plans which shall design spacious bedrooms. Living. Kitchen and toilets as per your choices and requirements with interiors to suit your pockets. While designing these plans by international architects we have considered Vastu, Fengshui, wherein the sunlight and free flowing air movement in to the homes",
//   },
//   {
//     title: 'Architectural Modelling',
//     imageUrl: serv2,
//     content: "A perfect work of art happens when everything blends into a seamless fusion creating a rhapsody that's melodious and breathtaking. Beautifully crafted masterpiece from the house of Inland Infratech. This 250- Acre Plotted Villa and commercial development is coming up at a plush locality and boasts of first-class standards and caters to crème de la crème crowds. Taking this legacy forward, Inland would be handing out projects of similar scale and width with world-class standards to its growing customer base in future"
//   },
//   {
//     title: 'Construction Management',
//     imageUrl: serv3,
//     content: "Experience intimate, nuanced living at its finest. Inland's AUREA OASIS is thoughtfully-conceived, meticulously- curated and an aesthetically crafted creation, designed for contemporary urban living. A boutique mixed-use development with 'Select 300' Villas, in Prime Somandapalli the gateway between Bengaluru and emergent Penakonda. Blessed with tranquility, natural greens and fresh air, well- connected to the city's better-known parts as well as the emerging destinations, and bestowed with an enviable collection of lifestyle features and modern-day indulgences.,"
//   },
// ];

//   return (
//     <div id="services" style={{ paddingTop: "100px" }} className="section h-[100vh]">

//       <div className="flex flex-wrap justify-center">
//       {data.map((item, index) => (
//         <Card
//           key={index}
//           index={index}
//           title={item.title}
//           imageUrl={item.imageUrl}
//           content={item.content}
//           expandedState={expandedState}
//           setExpandedState={setExpandedState}
//         />
//       ))}
//     </div>
//    </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import serv1 from "../assets/serv1.jpg";
import serv2 from "../assets/serv2.jpg";
import serv3 from "../assets/serv3.jfif";

const Card = ({
  title,
  imageUrl,
  content,
  index,
  expandedState,
  setExpandedState,
}) => {
  const isExpanded = expandedState[index];

  const toggleExpand = () => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !isExpanded;
    setExpandedState(newExpandedState);
  };

  return (
    <div
      className={`max-w-sm w-[360px] md:w-[330px] rounded overflow-hidden shadow-lg m-6 ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <img className="w-full " src={imageUrl} alt={title} />
      <div className="px-6 py-2 ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div
          className="text-gray-700  text-sm"
          style={{ "font-family": "FilsonProLight" }}
        >
          {isExpanded ? content : `${content.substring(0, 100)}...`}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="inline-block bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
          onClick={toggleExpand}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const [expandedState, setExpandedState] = useState(new Array(3).fill(false)); // Assuming you have 3 cards

  const data = [
    {
      title: "Preconstruction Planning",
      imageUrl: serv1,
      content:
        "Specially Designed by International landscape Architects. We are creating Mini Forests in AUREA OASIS with different trees which provides more Oxygen, Purified Air, Attracting Varieties of birds, and Butterflies. Jogging Tracks, Pedestrian Walking Areas, Villas are designed with unique elevations without replications and with unique floor plans which shall design spacious bedrooms. Living. Kitchen and toilets as per your choices and requirements with interiors to suit your pockets. While designing these plans by international architects we have considered Vastu, Fengshui, wherein the sunlight and free flowing air movement in to the homes",
    },
    {
      title: "Architectural Modelling",
      imageUrl: serv2,
      content:
        "A perfect work of art happens when everything blends into a seamless fusion creating a rhapsody that's melodious and breathtaking. Beautifully crafted masterpiece from the house of Inland Infratech. This 250- Acre Plotted Villa and commercial development is coming up at a plush locality and boasts of first-class standards and caters to crème de la crème crowds. Taking this legacy forward, Inland would be handing out projects of similar scale and width with world-class standards to its growing customer base in future",
    },
    {
      title: "Construction Management",
      imageUrl: serv3,
      content:
        "Experience intimate, nuanced living at its finest. Inland's AUREA OASIS is thoughtfully-conceived, meticulously- curated and an aesthetically crafted creation, designed for contemporary urban living. A boutique mixed-use development with 'Select 300' Villas, in Prime Somandapalli the gateway between Bengaluru and emergent Penakonda. Blessed with tranquility, natural greens and fresh air, well- connected to the city's better-known parts as well as the emerging destinations, and bestowed with an enviable collection of lifestyle features and modern-day indulgences.,",
    },
  ];

  return (
    <div
      id="services"
      style={{ paddingTop: "100px" }}
      className="section h-auto lg:h-auto mb-auto lg:mb-[100px]"
    >
      <div className="container mx-auto">
        <h1
          className="border-l-[5px] flex ml-[20px] lg:ml-[78px] mb-2 md:mb-6   border-gold uppercase font-bold text-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          &nbsp;FEATURED <span className="text-gold">&nbsp;SERVICES</span>
        </h1>
        <div
          className="flex flex-wrap justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {data.map((item, index) => (
            <Card
              key={index}
              index={index}
              title={item.title}
              imageUrl={item.imageUrl}
              content={item.content}
              expandedState={expandedState}
              setExpandedState={setExpandedState}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
