// import React, { useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import prj from "../assets/prj.jpg";
// import prj1 from "../assets/prj3.jpg";
// import prj2 from "../assets/prj2.jpg";
// import prj3 from "../assets/prj1.jpg";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Project = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div id='project' className="section" style={{ paddingTop: "100px" }}>  

//       <h1 className='text-2xl md:text-2xl font-bold text-start border-l-[5px] border-gold  mb-6 ml-5 md:ml-[55px]' data-aos="fade-left"
//         data-aos-duration="1000">
//         &nbsp;RECENT <span className='text-gold'>PROJECTS</span>
//       </h1>
//       <Slider className='lg:m-10 m-2' {...settings}>
//         <div data-aos="fade-right" >
//           <img src={prj3} alt="Slide 3" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
//         </div>
//         <div data-aos="fade-right" data-aos-duration="1000" >
//           <img src={prj} alt="Slide 1" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
//         </div>
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <img src={prj1} alt="Slide 2" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
//         </div>
//         <div data-aos="fade-right" data-aos-duration="1000" >
//           <img src={prj2} alt="Slide 3" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Project;


// import React from "react";
// import { ServiceData } from "./constants";

// export default function Project() {
//   return (


//     <div id="projects" style={{ paddingTop: "100px" }} className="section flex">
    
//       <div className="p-5 h-auto flex flex-wrap ">
       
//           <div className="flex-col">
//           {ServiceData.map((items) => (
//             <>
//             <img
//               src={items.backgroundImage}
//               alt="sample-image"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
           
//             <div className=" flex flex-col gap-3">
//               {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
//               <h1 className="text-[24px] lg:text-[34px]  ml-[80px] lg:ml-2 top-[0px] lg:top-2 uppercase bg-transparent  rounded text-black font-bold text-start lg:text-3xl">
//                 {items.title}{" "}
//               </h1>
//             </div>
//             </>
//           ))}
//           </div>

         
        
//       </div>
//     </div>
//   );
// }



import React from "react";
import { ProjectData } from "./constants";
import Card from "./Card"; // Assuming you have a Card component

export default function Project() {
  return (
    <div id="projects" style={{ paddingTop: "100px" }} className="section ">
      <h1
        className="border-l-[5px] flex ml-[20px] lg:ml-[130px]  border-gold uppercase font-bold text-2xl mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        &nbsp;FEATURED <span className="text-gold">&nbsp;PROJECTS</span>
      </h1>
      <div className="p-auto m-auto justify-center flex flex-wrap ">
        {ProjectData.map((item) => (
          <Card
            key={item.id}
            image={item.backgroundImage}
            title={item.title}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}
