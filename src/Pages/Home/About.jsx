import React from "react";
import { FaCheckCircle, FaIndustry, FaWater } from "react-icons/fa";

function About({ id }) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px" }}
      className="relative md:py-25 py-20 bg-white overflow-hidden"
    >
      <div className="relative w-full px-12">

        {/* SECTION HEADING */}
        <div className="text-center md:mb-20 mb-16" data-aos="fade-up">
          
          <div className="inline-block px-6 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
            About Us
          </div>

          <h2 className="text-[27px] md:text-5xl font-extrabold text-cyan-900 leading-tight">
            Engineering Excellence in <br />
            <span className="bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
              Water Purification
            </span>
          </h2>

          <div className="mt-6 w-28 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>

        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center md:text-left text-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8" data-aos="fade-right">

            <p className="text-lg text-cyan-900 leading-relaxed font-medium">
              Founded in 2005 by
              <span className="font-bold text-cyan-900"> Mr. Ashok Patel </span>
              and
              <span className="font-bold text-cyan-900"> Mr. Suresh Patel</span>,
              our company has grown into a trusted name in the water purification industry.
              With a strong foundation in innovation and engineering precision,
              we deliver reliable and affordable RO systems for domestic and industrial applications.
            </p>

            <p className="text-lg text-cyan-800 leading-relaxed">
              We specialize in manufacturing Reverse Osmosis Systems, Inline Filters,
              Alkaline Cartridges, Mineral Cartridges, Membrane Housings,
              Pre Filter Housings, RO Pipes, RO Pumps, Solenoid Valves,
              and complete customized RO Skid Solutions for OEMs and wholesalers.
            </p>

            <p className="text-lg text-cyan-800 leading-relaxed">
              Our continuous R&D, strict quality inspections, and commitment to
              performance ensure every product meets the highest industry standards.
              We don't just manufacture products — we build long-term trust through
              quality, innovation, and sustainable water solutions.
            </p>

          </div>

          {/* RIGHT CARD */}
         <div className="relative" data-aos="fade-left">

  {/* rotating decoration */}
  <div className="absolute -top-12 -right-12 w-44 h-44 border border-cyan-400/20 rounded-full opacity-40 animate-spin-slow"></div>

  {/* main card */}
  <div className="relative bg-cyan-800 backdrop-blur-xl p-12 rounded-3xl border border-cyan-700/40 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">

    <h3 className="text-2xl font-bold text-white mb-6">
      Why Choose Our Systems
    </h3>

    <p className="text-cyan-200 leading-relaxed mb-10">
      Our advanced purification technology delivers reliable
      performance and long-lasting durability for industrial
      and commercial water treatment applications.
    </p>

    <div className="space-y-8">

      {/* Feature 1 */}
      <div className="flex items-start gap-4 group">

        <div className="w-11 h-11 flex items-center justify-center rounded-xl 
        bg-cyan-500/20 text-cyan-300 border border-cyan-400/20
        group-hover:bg-cyan-500 group-hover:text-white transition">

          <FaWater size={18} />

        </div>

        <div>
          <h4 className="font-semibold text-white">
            High Purity Output
          </h4>

          <p className="text-cyan-300 text-sm mt-1">
            Advanced RO filtration ensuring consistent and safe water quality.
          </p>
        </div>

      </div>


      {/* Feature 2 */}
      <div className="flex items-start gap-4 group">

        <div className="w-11 h-11 flex items-center justify-center rounded-xl 
        bg-cyan-500/20 text-cyan-300 border border-cyan-400/20
        group-hover:bg-cyan-500 group-hover:text-white transition">

          <FaIndustry size={18} />

        </div>

        <div>
          <h4 className="font-semibold text-white">
            Industrial Reliability
          </h4>

          <p className="text-cyan-300 text-sm mt-1">
            Designed for continuous operation across multiple industries.
          </p>
        </div>

      </div>


      {/* Feature 3 */}
      <div className="flex items-start gap-4 group">

        <div className="w-11 h-11 flex items-center justify-center rounded-xl 
        bg-cyan-500/20 text-cyan-300 border border-cyan-400/20
        group-hover:bg-cyan-500 group-hover:text-white transition">

          <FaCheckCircle size={18} />

        </div>

        <div>
          <h4 className="font-semibold text-white">
            Proven Performance
          </h4>

          <p className="text-cyan-300 text-sm mt-1">
            Trusted systems engineered for durability and efficiency.
          </p>
        </div>

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