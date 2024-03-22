import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Components/constants";

const Services = () => {
  return (
    <div className="m-0 lg:m-7  ">
      <h1
        className="border-l-[5px] flex  ml-[20px]  lg:ml-[100px]  border-gold uppercase font-bold text-2xl mb-4 mt-[80px] "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        &nbsp; OUR SERVICES
      </h1>
      <div className="flex items-center justify-center flex-col  ">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            700: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[85%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap- mb-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-95"

                  style={{ backgroundImage: `${item.gradientBackground},url(${item.backgroundImage}) `,'border':'2px solid grey' }}
                />
                <div className="absolute inset-0  " />
                <div className="relative flex flex-col gap-3">
                  {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                  <h1 className="text-[14px] lg:text-[34px] absolute ml-[-22px] lg:ml-0 top-[-20px] lg:top-0 uppercase bg-transparent  rounded text-black font-bold text-start lg:text-3xl">
                    {item.title}{" "}
                  </h1>
                  <p className="lg:text-[10px] text-[0px] font-bold  text-white mt-[-14px] text-start">
                    {item.content}{" "}
                  </p>
                </div>
                {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
