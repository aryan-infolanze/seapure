import React from "react";
import overviewImage from "../../assets/img39.jpg"; // path apne project ke hisab se adjust karo

function CompanyOverview({ id }) {
  return (
    <section id={id} style={{ scrollMarginTop: '96px' }} className="relative md:py-28 py-20 bg-gradient-to-b from-white via-[#f6fcff] to-[#e0f7ff] overflow-hidden">

      {/* ===== Background Water Glow Elements ===== */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-3xl"></div>

      {/* ===== Subtle Dot Pattern ===== */}
      <svg
        className="absolute top-24 left-6 opacity-20"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <defs>
          <pattern
            id="overviewDots"
            x="0"
            y="0"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="#0ea5e9" />
          </pattern>
        </defs>
        <rect width="160" height="160" fill="url(#overviewDots)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* ===== RIGHT SIDE IMAGE ===== */}
        <div data-aos="fade-left" className="relative">

          {/* Decorative Frame Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl blur-2xl opacity-20"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-blue-100">
            <img
              src={overviewImage}
              alt="Company Overview"
              className="w-full md:h-auto  hover:scale-105 transition duration-700 ease-in-out"
            />
          </div>

        </div>
        {/* ===== LEFT CONTENT ===== */}
        <div data-aos="fade-right">

          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
            </span>
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-500">
              Company Overview
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Engineering Purity. <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Delivering Trust.
            </span>
          </h2>

          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>

          <p className="mt-8 text-blue-800 leading-relaxed font-semibold text-lg">
            Shreya Water Tech LLP, an ISO 9001:2008 certified company, is one of the leading manufacturers and suppliers of Reverse Osmosis (RO) systems and its components. Established in 2005, the company continuously upgrades itself with the latest technology and market trends to adapt to customer needs while maintaining strict quality checks and precision manufacturing standards.
          </p>

        </div>

      

      </div>

    </section>
  );
}

export default CompanyOverview;