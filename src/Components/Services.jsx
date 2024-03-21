import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../index.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../assets/prj2.jpg';
import slide_image_2 from '../assets/prj1.jpg';
import slide_image_3 from '../assets/prj3.jpg';
import slide_image_4 from '../assets/prj2.jpg';
import slide_image_5 from '../assets/prj1.jpg';
import slide_image_6 from '../assets/prj2.jpg';
import slide_image_7 from '../assets/prj2.jpg';

function Services() {
  return (
    <div className="container m-auto">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" className='w-full h-full'/>
        </SwiperSlide><SwiperSlide>
          <img src={slide_image_7} alt="slide_image" className='w-full h-full'/>
        </SwiperSlide><SwiperSlide>
          <img src={slide_image_3} alt="slide_image" className='w-full h-full'/>
        </SwiperSlide><SwiperSlide>
          <img src={slide_image_2} alt="slide_image" className='w-full h-full'/>
        </SwiperSlide>
       
       

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Services;