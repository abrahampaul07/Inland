// // import React, { useEffect } from 'react';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import prj from "../assets/prj.jpg";
// // import prj1 from "../assets/prj3.jpg";
// // import prj2 from "../assets/prj2.jpg";
// // import prj3 from "../assets/prj1.jpg";
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // const Project = () => {
// //   useEffect(() => {
// //     AOS.init();
// //   }, []);

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2000,
// //   };

// //   return (
// //     <div id='project' className="section" style={{ paddingTop: "100px" }}>  

// //       <h1 className='text-2xl md:text-2xl font-bold text-start border-l-[5px] border-gold  mb-6 ml-5 md:ml-[55px]' data-aos="fade-left"
// //         data-aos-duration="1000">
// //         &nbsp;RECENT <span className='text-gold'>PROJECTS</span>
// //       </h1>
// //       <Slider className='lg:m-10 m-2' {...settings}>
// //         <div data-aos="fade-right" >
// //           <img src={prj3} alt="Slide 3" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
// //         </div>
// //         <div data-aos="fade-right" data-aos-duration="1000" >
// //           <img src={prj} alt="Slide 1" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
// //         </div>
// //         <div data-aos="fade-right" data-aos-duration="1000">
// //           <img src={prj1} alt="Slide 2" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
// //         </div>
// //         <div data-aos="fade-right" data-aos-duration="1000" >
// //           <img src={prj2} alt="Slide 3" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
// //         </div>
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default Project;


// // import React from "react";
// // import { ServiceData } from "./constants";

// // export default function Project() {
// //   return (


// //     <div id="projects" style={{ paddingTop: "100px" }} className="section flex">
    
// //       <div className="p-5 h-auto flex flex-wrap ">
       
// //           <div className="flex-col">
// //           {ServiceData.map((items) => (
// //             <>
// //             <img
// //               src={items.backgroundImage}
// //               alt="sample-image"
// //               style={{
// //                 width: "300px",
// //                 height: "300px",
// //                 objectFit: "cover",
// //               }}
// //             />
           
// //             <div className=" flex flex-col gap-3">
// //               {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
// //               <h1 className="text-[24px] lg:text-[34px]  ml-[80px] lg:ml-2 top-[0px] lg:top-2 uppercase bg-transparent  rounded text-black font-bold text-start lg:text-3xl">
// //                 {items.title}{" "}
// //               </h1>
// //             </div>
// //             </>
// //           ))}
// //           </div>

         
        
// //       </div>
// //     </div>
// //   );
// // }



// import React from "react";
// import { ProjectData } from "./constants";
// import Card from "./Card"; // Assuming you have a Card component

// export default function Project() {
//   return (
//     <div id="projects" style={{ paddingTop: "100px" }} className="section ">
//       <h1
//         className="border-l-[5px] flex ml-[20px] lg:ml-[130px]  border-gold uppercase font-bold text-2xl mb-4"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//       >
//         &nbsp;FEATURED <span className="text-gold">&nbsp;PROJECTS</span>
//       </h1>
//       <div className="p-auto justify-center  flex flex-wrap ">
//         {ProjectData.map((item) => (
//           <Card
//             key={item.id}
//             image={item.backgroundImage}
//             title={item.title}
//             location={item.location}
//           />
          
//         ))}
//       </div>
      
//     </div>
//   );
// }


import React from 'react';
import { MdFileDownload } from "react-icons/md";
import broucher from '../assets/broucher/inland_brochure.pdf'

const projects = [
  { name: 'Project ', description: 'Description of Project ', pdfUrl: broucher },
  // Add more projects as needed
];

const Project = () => {
  const downloadPdf = (pdfUrl) => {
    // Function to trigger PDF download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop(); // Extract filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center items-center section"id="projects" style={{ paddingTop: "100px" }}>
      <div className="w-full max-w-screen-lg">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Projects</h2>
          <div className=" gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <button
                  className="mt-4 bg-blue-500  hover:bg-gold hover:text-white text-gold font-bold py-2 px-4 rounded self-center"
                  onClick={() => downloadPdf(project.pdfUrl)}
                >
                 Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;