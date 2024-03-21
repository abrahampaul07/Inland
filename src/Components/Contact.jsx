import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container flex-row md:flex mb-9 ">
        <div className="left-container w-full md:w-1/2 p-5 mb-8 lg:m-9">
          <div className="flex flex-col space-y-3 w-full lg:w-[500px]">
          <h1 className="font-bold text-2xl border-l-[5px] flex border-gold"  data-aos="fade-up" data-aos-duration="1000">&nbsp; CONTACT US</h1>
          <input type="text" placeholder="Name" className="border-[1px] rounded border-gold p-2"  data-aos="fade-up" data-aos-duration="3000"/>
          <input type="text" placeholder="Contact Number" className="border-[1px] rounded border-gold p-2" data-aos="fade-up" data-aos-duration="3000"/>
          <input type="text" placeholder="Message" className="border-[1px] rounded border-gold p-2"  data-aos="fade-up" data-aos-duration="3000"/>
          <button className="p-2 rounded bg-gold "  data-aos="fade-up" data-aos-duration="3000">Submit </button>
          </div>
        </div>
        <div className="right-container w-full  md:w-1/2"  data-aos="fade-up" data-aos-duration="3000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711001519082!5m2!1sen!2sin"
            height="350"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" w-[100%] lg:w-[600px] rounded border-[1px] border-gold"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
