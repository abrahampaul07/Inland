import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import own1 from "../assets/owners/salman.jpg";
import own2 from "../assets/owners/shafiq.jpg";
import own3 from "../assets/owners/abhijit.jpg";

const Cardd = () => {
  // Arrow Components
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev" onClick={onClick}>
        Prev
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next" onClick={onClick}>
        Next
      </button>
    );
  };

  const data = [
    
    {
      id: 1,
      imageUrl: own2,
      title: "Chairman",
      name: "Mohammed Shafiq",
      description:
        "Mohammed Shafiq has been the frontier in the realty sector since two decades, envisaged in this field of real estate development & construction, Mohammed Shafiq’s journey began in a small city of Karnataka – “Bangalore” wherein he’s moved quiet a number of families to homes, flats & Bungalow’s",
      description2:
        " Mr. Shafiq has more than 20 years of experience of multi successful businesses and has pioneered his passion into reality…",
      description3:
        "Mohammed Shafiq has more than 20 years of experience in the real-estate world, a concept leader in various other business wherein Mohammed Shafiq formulated his companies under the brand “RUBY”.",
    },
    {
      id: 2,
      imageUrl: own1,
      title: "Managing Director",
      name: "SALMAN Khalid sheriff",
      description:
        "Salman Khalid Sheriff boasts a rich, three-decade-long career in construction and development, with a profound expertise in real estate",
      description2:
        "Throughout his career, he has collaborated with esteemed companies such as IBC and Platinum Builders, consistently delivering exceptional results.",
    },
    {
      id: 3,
      imageUrl: own3,
      title: "Director",
      name: "ABHIJITH Sadashivaiah",
      description:
        "Seeking hands-on experience in International Business law with meticulous attention to detail, driven by a strong determination to succeed.",
      description2:
        " Known for his proficiency in court procedures and resource networking, Abhijith is a compassionate advocate & a valuable asset in legal settings.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="section pt-[70px] pb-9 main-container bg-crm md:h-auto lg:h-[100vh] ">
      <h1
        className="flex justify-center text-2xl lg:text-4xl mb-3"
        style={{ fontFamily: "Nephilm" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Board of Directors
      </h1>
      <div
        className=" lg:flex p-1 justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Large screens */}
        <div
          className="hidden  md:flex "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {" "}
          {data.map((item) => (
            <div
              key={item.id}
              className="md:w-1/3 relative md:m-auto p-5 mb-2 lg:mb-0"
            >
              <div className="bg-gray h-full flex flex-col  border-[1px] border-silver">
                <img
                  src={item.imageUrl}
                  alt="Card Image"
                  className="lg:w-[360px] md:w-[300px] lg:h-[360px] md:h-[200px]   "
                />
                <div className="lg:p-5 md:p-2 text-start  bg-white lg:absolute lg:w-[330px] md:w-[210px] top-[340px]">
                  <p
                    className="text-sm  mb-2"
                    style={{ fontFamily: "FilsonProLight" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-1xl font-bold text-black opacity-60 mb-2 mt-[-10px]">
                    {item.name}
                  </p>
                  <button className="mt-3 font-bold">KNOW MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small screens - Slider */}
        <div className="md:hidden">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="px-4">
                <div className="bg-gray-100 p-4">
                  <img
                    src={item.imageUrl}
                    alt="Card Image"
                    className="w-full h-68 object-cover"
                  />
                  <div className="p-3  text-start bg-white">
                    <p className="text-xs ">{item.title}</p>
                    <p className="text-s font-bold text-black opacity-60 ">
                      {item.name}
                    </p>
                    <button className="mt-3 text-s font-bold">KNOW MORE</button>
                    {/* <p className="text-sm">{item.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
