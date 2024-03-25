import React from "react";
import { Carousel } from "react-responsive-3d-carousel";
import { ServiceData } from "./constants";

export default function Services() {
  return (
    <div id="services" style={{ paddingTop: "100px" }} className="section">
      <h1
        className="border-l-[5px] flex ml-[20px] lg:ml-[110px]  border-gold uppercase font-bold text-2xl mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        &nbsp;OUR <span className="text-gold">&nbsp;SERVICES</span>
      </h1>

      <div className="p-5 h-auto">
        <Carousel>
          {ServiceData.map((items) => (
            <>
            <img
              src={items.backgroundImage}
              alt="sample-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="absolute inset-0  " />
            <div className="relative flex flex-col gap-3">
              {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
              <h1 className="text-[24px] lg:text-[34px] absolute mt-2 ml-[90px] lg:ml-2 top-[0px] lg:top-2 uppercase bg-transparent  rounded text-black font-bold text-start lg:text-3xl">
                {items.title}{" "}
              </h1>
              <p className="lg:text-[10px] text-[0px] font-bold  text-white mt-[-14px] text-start">
                {items.content}{" "}
              </p>
            </div>
            </>
          ))}

         
        </Carousel>
      </div>
    </div>
  );
}
