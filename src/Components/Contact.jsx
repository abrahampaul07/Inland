// import React from "react";

// const Contact = () => {
//   return (
//     <div id="contact" style={{ paddingTop: "40px" }} className="section w-full text-white bg-black flex flex-col md:flex-row lg:pr-12 p-5">
//       <div className="left-container w-full md:w-1/3  flex justify-center m-auto">
//         <div className="flex flex-col space-y-3 w-full md:w-[200px] lg:w-[300px]">
//           <form action="submit" className="flex flex-col gap-4">
//             <h1
//               className="border-l-[5px] flex border-gold uppercase font-bold text-2xl  "
//               data-aos="fade-up"
//               data-aos-duration="1000"
//             >
//               &nbsp;CONTACT <span className="text-gold">&nbsp;US</span>
//             </h1>
//             <input
//               type="text"
//               required
//               placeholder="Name"
//               className="border-[1px] rounded border-gold p-2 bg-black"
//               data-aos="fade-up"
//               data-aos-duration="2000"
//             />
//             <input
//               type="text"
//               required
//               placeholder="Contact Number"
//               className="border-[1px] rounded border-gold p-2 bg-black"
//               data-aos="fade-up"
//               data-aos-duration="2000"
//             />
//             <input
//               type="text"
//               required
//               placeholder="Message"
//               className="border-[1px] rounded border-gold p-2 bg-black"
//               data-aos="fade-up"
//               data-aos-duration="2000"
//             />
//             <button
//               className="p-2 rounded bg-gold "
//               data-aos="fade-up"
//               data-aos-duration="2000"
//             >
//               Submit{" "}
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="middle-container w-full md:w-[330px] lg:w-1/3 mt-[70px] md:mt-auto text-start space-y-2 space-x-1  flex-col justify-center m-auto " data-aos="fade-up"
//               data-aos-duration="1000">
//         <h1 className="text-2xl  ">Head Office</h1>
//         <br />
//         <h6 >Address:</h6>
//         <p className="opacity-50 ">No. 42, Balaji Layout, Kogilu Yelahanka,<span><br /></span> Behind Vagdevi International School,</p>
//         <p className="opacity-50">Bangalore 560064. India,</p>
//         <br />
//         <p>info@inlandinfratech.com</p>
//         <h3>+91 - 95135 18199</h3>
//       </div>
//       <div className="right-container w-full md:w-1/3 mt-[70px] md:mt-auto flex justify-center m-auto">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711001519082!5m2!1sen!2sin"
//           height="300"
//           width='600px'
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="w-full rounded border-[1px] border-icon"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="flex bg-black text-white flex-col lg:flex-row md:flex-row items-center">
        <div className="container-item lg:w-1/3 w-full md:w-60 p-5 mb-8 lg:m-9">
          <div className="flex flex-col space-y-3">
            <form action="submit" className="flex flex-col gap-4">
              <h1
                className="border-l-[5px] flex border-gold uppercase font-bold text-2xl text-center lg:text-left"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                &nbsp;CONTACT <span className="text-gold">&nbsp;US</span>
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

        <div className="container-item lg:w-1/3 p-5 mb-8 md:w-60 lg:m-9">
          <div className="flex flex-col space-y-3 text-left">
            <h1
              className="border-l-[5px] lg:border-none flex border-gold uppercase font-bold text-2xl text-center lg:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              &nbsp;Head Office
            </h1>
            <p className="text-gray-700" data-aos="fade-up" data-aos-duration="2000">
              Address: No. 42, Balaji Layout, Kogilu Yelahanka, Behind Vagdevi International School, Bangalore 560064. India
            </p>
            <p className="text-gray-700" data-aos="fade-up" data-aos-duration="2000">
              Email: info@inlandinfratech.com
            </p>
            <p className="text-gray-700" data-aos="fade-up" data-aos-duration="2000">
              Phone: +91 - 95135 18199
            </p>
          </div>
        </div>

        <div
          className="container-item lg:w-1/3 p-5 mb-8 lg:m-9"
          data-aos="fade-up"
          data-aos-duration="3000"
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
    </>
  );
};

export default Contact;