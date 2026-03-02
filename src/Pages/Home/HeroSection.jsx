import React from "react";
import drop from "../../assets/drop.jpg"
import { useNavigate } from "react-router-dom";

function HeroSection({ id }) {
  const navigate = useNavigate();

  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px" }}
      className="relative  md:pt-10 pb-10 md:pb-0 overflow-hidden bg-gradient-to-tr from-white via-blue-50 to-white"
    >
      <div className="w-full mx-auto md:grid md:grid-cols-2 gap-12 items-center h-auto">

        {/* LEFT CONTENT */}

  <div
          className="py-10 px-10"
          data-aos="fade-right"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
            </span>
            <span className="text-md font-bold text-blue-800 uppercase tracking-wider">
              Advanced Water Technology
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-blue-900">
            Pure Water Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              For Industrial & Domestic Use
            </span>
          </h1>

          <div className="mt-6 w-28 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>

          <p className="mt-8 text-blue-800 font-semibold text-lg leading-relaxed max-w-xl">
            Shreya Water Tech LLP delivers high-performance industrial &
            domestic RO purification systems designed for reliability,
            efficiency, and long-term sustainability.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
          <a href="#products">
    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold shadow-xl hover:scale-105 transition duration-300">
      Explore Products
    </button>
  </a>

           <a href="#contact">
    <button className="px-8 py-3 border-2 border-blue-400 text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition duration-300">
      Contact Us
    </button>
  </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative flex justify-center md:justify-end items-center md:px-0 px-6"
          data-aos="fade-left"
        >
          <img
            src={drop}
            alt="Industrial Water Earth"
            className="md:w-full md:h-screen w-full h-[500px] object-cover rounded-2xl md:rounded-none transition duration-700"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;