import React, { useEffect } from "react";


function About({ id }) {

  return (
    <section id={id} style={{ scrollMarginTop: '96px' }} className="relative md:py-25 py-20 bg-white overflow-hidden">

      {/* ===== Soft Background Glow ===== */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== SECTION HEADING ===== */}
        <div
          className="text-center md:mb-20 mb-16"
          data-aos="fade-up"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
            About Us
          </div>

          <h2 className="text-[27px] md:text-5xl font-extrabold text-blue-900 leading-tight">
            Engineering Excellence in <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Water Purification
            </span>
          </h2>

          <div className="mt-6 w-28 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>

        {/* ===== MAIN CONTENT GRID ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center md:text-left text-center">

          {/* ===== LEFT CONTENT ===== */}
          <div
            className="space-y-8"
            data-aos="fade-right"
          >

            <p className="text-lg text-blue-800 leading-relaxed font-medium">
              Founded in 2005 by
              <span className="font-bold text-blue-900"> Mr. Ashok Patel </span>
              and
              <span className="font-bold text-blue-900"> Mr. Suresh Patel</span>,
              our company has grown into a trusted name in the water purification industry.
              With a strong foundation in innovation and engineering precision, we deliver
              reliable and affordable RO systems for domestic and industrial applications.
            </p>

            <p className="text-lg text-blue-700 leading-relaxed">
              We specialize in manufacturing Reverse Osmosis Systems, Inline Filters,
              Alkaline Cartridges, Mineral Cartridges, Membrane Housings, Pre Filter
              Housings, RO Pipes, RO Pumps, Solenoid Valves, and complete customized
              RO Skid Solutions for OEMs and wholesalers.
            </p>

            <p className="text-lg text-blue-700 leading-relaxed">
              Our continuous R&D, strict quality inspections, and commitment to
              performance ensure every product meets the highest industry standards.
              We don't just manufacture products — we build long-term trust through
              quality, innovation, and sustainable water solutions.
            </p>

          </div>

          {/* ===== RIGHT SIDE PREMIUM CARD ===== */}
          <div
            className="relative"
            data-aos="fade-left"
          >

            <div className="absolute -top-10 -right-10 w-40 h-40 border border-blue-200 rounded-full opacity-30 animate-spin-slow"></div>

            <div className="relative bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-blue-100">

              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Our Commitment
              </h3>

              <p className="text-blue-700 leading-relaxed mb-8">
                To deliver cutting-edge filtration systems that redefine
                water safety standards through innovation, durability,
                and performance-driven engineering.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-6 text-center">

                <div
                  className="p-6 bg-gradient-to-br items-center justify-center flex from-blue-50 to-cyan-50 rounded-2xl"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-blue-900">20+</h4>
                    <p className="text-blue-600 text-sm mt-2">
                      Years Experience
                    </p>
                  </div>
                </div>

                <div
                  className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <h4 className="text-2xl font-bold text-blue-900">
                    Industry Focus
                  </h4>
                  <p className="text-blue-600 text-sm mt-2">
                    Trusted Across Industries
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <style>
        {`
          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }
        `}
      </style>

    </section>
  );
}

export default About;