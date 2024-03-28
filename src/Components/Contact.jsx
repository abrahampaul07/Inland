import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="bg-black">
        <div
          id="contact"
          className="flex bg-black text-white flex-col lg:flex-row md:flex-row items-center   "
        >
          <div className="container-item lg:w-1/3 w-full md:w-60 p-5 mb-8 lg:m-9">
            <div className="flex flex-col space-y-3">
              <form action="submit" className="flex flex-col gap-4">
                <h1
                  className="border-l-[5px] flex border-gold uppercase font-bold text-2xl text-center lg:text-left"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  &nbsp;GET IN <span className="text-gold">&nbsp;TOUCH</span>
                </h1>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="border-[1px] rounded border-gold p-2 bg-black"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
                <input
                  type="text"
                  required
                  placeholder="Contact Number"
                  className="border-[1px] rounded border-gold p-2 bg-black"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
                <input
                  type="text"
                  required
                  placeholder="Message"
                  className="border-[1px] rounded border-gold p-2 bg-black"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
                <button
                  className="p-2 rounded bg-gold"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>

          <div className="container-item lg:w-1/3 p-5 mb-3 md:w-60 lg:m-9">
            <div className="flex flex-col space-y-3 text-left">
              <h1
                className="border-l-[5px] lg:border-none flex border-gold uppercase font-bold text-2xl text-center lg:text-left"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="flex lg:hidden">&nbsp;</span> REGD. Office
              </h1>
              <p
                className="text-gray-700 text-sm"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{ "font-family": "FilsonProLight" }}
              >
                No. 42, Balaji Layout Kogilu Yelahanka, Behind Vagdevi
                International School, Bangalore - 560064, INDIA
              </p>
              <br />
              <h1
                className="border-l-[5px] mt-9 lg:border-none flex border-gold uppercase font-bold text-2xl text-center lg:text-left"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                 <span className="flex lg:hidden">&nbsp;</span>Head Office
              </h1>
              <p
                className="text-gray-700 text-sm"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{ "font-family": "FilsonProLight" }}
              >
                31/2, Castle Street, 1st floor, Ashok Nagar, Bengaluru, 560025,
                INDIA
              </p>
              <p
                className="text-gray-700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                
                <span style={{ "font-family": "FilsonProLight" }}>
                  info@inlandinfratech.com
                </span>
              </p>
              <p
                className="text-gray-700"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                
                <span style={{ "font-family": "FilsonProLight" }}>
                  +91 - 95135 18199
                </span>
              </p>
            </div>
          </div>

          <div
            className="container-item lg:w-1/3 p-5 mb-8 lg:m-9"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711001519082!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>

        <div className="flex  bg-black text-white p-9 ">
          <div className="border-t-[1px] border-silver p-4 w-full flex-column md:flex md:justify-between">
            <p className="mt-9" style={{ "font-family": "FilsonProLight" }} >
              {" "}
              © 2024 Official Website of <span className="text-gold">Inland Infratech.</span> All rights reserved.{" "}
            </p>
            <div className="icons flex gap-4 mt-9 justify-center text-2xl ">
              <FaInstagram className="hover:text-3xl" />{" "}
              <FaFacebook className="hover:text-3xl" />
              <FaXTwitter className="hover:text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
