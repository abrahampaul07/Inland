import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prj from "../assets/prj.jpg";
import prj1 from "../assets/prj1.jpg";
import prj2 from "../assets/prj2.jpg";
import prj3 from "../assets/prj3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <h1 className='text-1xl md:text-4xl font-bold text-start border-l-[3px] border-gold mt-[50px] md:mt-[120px] mb-6 ml-4 md:ml-9' data-aos="zoom-out-up" data-aos-duration="1000">
        &nbsp; OUR RECENT <span className='text-yllw'>PROJECTS</span>
      </h1>
      <Slider className='m-auto' {...settings}>
        <div data-aos="fade-right" >
          <img src={prj3} alt="Slide 3" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" >
          <img src={prj} alt="Slide 1" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <img src={prj1} alt="Slide 2" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" >
          <img src={prj2} alt="Slide 3" className='h-[200px] md:h-[500px] w-11/12 m-auto' />
        </div>
      </Slider>
    </>
  );
};

export default Project;
