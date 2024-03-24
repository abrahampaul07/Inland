import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prj from "../assets/prj.jpg";
import prj1 from "../assets/prj3.jpg";
import prj2 from "../assets/prj2.jpg";
import prj3 from "../assets/prj1.jpg";
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
    <div id='project' className="section" style={{ paddingTop: "100px" }}>  

      <h1 className='text-2xl md:text-2xl font-bold text-start border-l-[5px] border-gold  mb-6 ml-5 md:ml-[55px]' data-aos="fade-left"
        data-aos-duration="1000">
        &nbsp;RECENT <span className='text-gold'>PROJECTS</span>
      </h1>
      <Slider className='lg:m-10 m-2' {...settings}>
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
    </div>
  );
};

export default Project;
