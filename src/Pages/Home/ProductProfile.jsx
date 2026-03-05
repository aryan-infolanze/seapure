import React from "react";
import skid1 from "../../assets/skid1.jpeg";
import skid5 from "../../assets/skid5.jpeg";
import skid3 from "../../assets/skid3.jpeg";

import { FaWater, FaIndustry, FaCogs,FaBox  } from "react-icons/fa";

function ProductProfile() {
  return (
    <section className="relative md:py-28 py-20 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative w-full mx-auto px-12 grid md:grid-cols-2 gap-20 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div data-aos="fade-right">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
            <FaBox />
            Product Overview
          </div>

          {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-900 leading-tight">
  Advanced RO Systems <br />
  <span className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
    Engineered for Excellence
  </span>
</h2>

          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>

          {/* Description */}
          <p className="mt-8 text-cyan-800 leading-relaxed text-lg">
            We manufacture high-performance Reverse Osmosis systems,
            inline filters, membrane housings and industrial water
            purification components engineered for precision,
            durability and long-term operational efficiency.
          </p>

          {/* Feature Points */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                <FaWater />
              </div>
              <p className="text-cyan-900 font-semibold">
                High Efficiency Water Purification
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                <FaCogs />
              </div>
              <p className="text-cyan-900 font-semibold">
                Precision Engineered Components
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                <FaIndustry />
              </div>
              <p className="text-cyan-900 font-semibold">
                Industrial Grade Reliability
              </p>
            </div>

          </div>

        </div>

        {/* ===== RIGHT SIDE IMAGE STACK ===== */}
        <div data-aos="fade-left" className="relative h-[420px] md:h-[520px]">

          {/* Back Image */}
          <div className="absolute top-0 left-0 w-[70%] rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-[-6deg] hover:rotate-0 transition duration-500">
            <img
              src={skid1}
              alt="RO Skid"
              className="w-full h-[260px] object-cover"
            />
          </div>

          {/* Middle Image */}
          <div className="absolute top-24 right-0 w-[70%] rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-[6deg] hover:rotate-0 transition duration-500">
            <img
              src={skid5}
              alt="RO System"
              className="w-full h-[260px] object-cover"
            />
          </div>

          {/* Front Image */}
          <div className="absolute bottom-0 left-20 w-[70%] rounded-2xl overflow-hidden shadow-2xl border-8 border-white hover:scale-105 transition duration-500">
            <img
              src={skid3}
              alt="Industrial RO"
              className="w-full h-[260px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductProfile;