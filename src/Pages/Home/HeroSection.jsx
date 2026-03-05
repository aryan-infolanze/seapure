import React from "react";
import image from "../../assets/image.jpg";
import waterBg from "../../assets/back.jpg";

function HeroSection({ id }) {
  return (
    <section
      id={id}
      className="relative pt-10 pb-5 md:pb-0 h md:pt-24 min-h-screen flex items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${waterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F33]/70 via-[#0A1F33]/30 to-[#0A1F33]/70"></div>

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="space-y-8 max-w-xl">

            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67E8F9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#67E8F9]"></span>
              </span>

              <span className="text-sm tracking-widest uppercase text-cyan-300 font-semibold">
                Advanced Water Technology
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Next-Generation
              <br />
              <span className="bg-white bg-clip-text text-transparent">
                <span className="text-blue-300">Industrial RO</span> Systems
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Engineered for efficiency and built for long-term durability,
              our high-performance purification systems deliver reliable
              water solutions for industrial and domestic applications.
            </p>

            <div className="flex gap-5 pt-4 flex-wrap">
              <a href="#products">
                <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
                  Explore Products
                </button>
              </a>

              <a href="#contact">
                <button className="px-6 sm:px-8 py-3 border border-cyan-400 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500 hover:text-black transition duration-300">
                  Get Consultation
                </button>
              </a>
            </div>

          </div>

        {/* RIGHT IMAGE */}
<div className="flex justify-center lg:justify-end w-full">
  <div className="bg-white p-3 rounded-xl">

    <img
      src={image}
      alt="Industrial System"
      className="w-full max-w-md md:max-w-xl h-auto object-cover rounded-xl"
    />

  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;