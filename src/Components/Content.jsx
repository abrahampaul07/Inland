import React, { useEffect } from "react";
import arch from "../assets/arch.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Content = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <h1>What we do?</h1>
      <div className="flex flex-row">
        <div className="w-1/2" data-aos="fade-right">
            <img src={arch} alt="" />
        </div>
        <div className="w-1/2">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/2">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-1/2">
            <img src={arch} alt="" />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/2">
            <img src={arch} alt="" />
        </div>
        <div className="w-1/2">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
