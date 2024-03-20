import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arch from "../assets/arch.jpg";

const Project = () => {
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
    <Slider className='w-full' {...settings}>
      <div>
        <img src={arch} alt="Slide 1" />
      </div>
      <div>
        <img src={arch} alt="Slide 2" />
      </div>
      <div>
        <img src={arch} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default Project;
