import React from "react";
import skid1 from "../../assets/skid1.jpeg";
import skid5 from "../../assets/skid5.jpeg";
import skid3 from "../../assets/skid3.jpeg"; 

function ProductProfile() {
  return (
    <section className="relative md:py-28 py-16 bg-white overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div data-aos="fade-right">
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
            </span>
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-500">
              Product Overview
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Advanced RO Systems <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Engineered for Excellence
            </span>
          </h2>

          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>

          <p className="mt-8 text-blue-800 font-semibold leading-relaxed text-lg">
            We manufacture high-performance Reverse Osmosis systems,
            inline filters, membrane housings, and industrial water
            purification components designed for durability and precision.
            Our products meet modern engineering standards and ensure
            long-term operational reliability.
          </p>

        </div>

        {/* ===== RIGHT SIDE LAYERED IMAGES ===== */}
        <div data-aos="fade-left" className="relative h-[500px]">

          {/* Image 1 - Back */}
          <div className="absolute top-0 left-0 w-[75%] rounded-2xl border-8 border-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src={skid1}
              alt="RO Skid 1"
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Image 2 - Middle */}
          <div className="absolute top-20 right-0 w-[75%] rounded-2xl border-8 border-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src={skid5}
              alt="RO Skid 2"
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Image 3 - Front */}
          <div className="absolute bottom-0 left-16 w-[75%] rounded-2xl border-8 border-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src={skid3}
              alt="RO Skid 3"
              className="w-full h-[350px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductProfile;