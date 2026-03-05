import React from "react";
import {
  FaFilter,
  FaTint,
  FaCogs,
  FaTools,
  FaIndustry,
  FaWater,
} from "react-icons/fa";

const parts = [
  { name: "Inline Filter", icon: <FaFilter /> },
  { name: "Alkaline Filter", icon: <FaWater /> },
  { name: "B12 Copper Filter", icon: <FaTint /> },
  { name: "Mineral Cartridges", icon: <FaFilter /> },
  { name: "Filter Housing", icon: <FaCogs /> },
  { name: "RO Pipe (1/4, 3/8)", icon: <FaTools /> },
  { name: "Membrane Housing Adaptor", icon: <FaCogs /> },
  { name: "SMPS", icon: <FaIndustry /> },
  { name: "All Type RO Stand", icon: <FaIndustry /> },
  { name: "Custom Industrial RO Solutions", icon: <FaIndustry /> },
  { name: "Domestic RO System Setup", icon: <FaWater /> },
  { name: "Maintenance & Spare Parts", icon: <FaTools /> }
];

function RoPartsSection({ id }) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px" }}
      className="relative md:py-32 py-20 bg-cyan-800 overflow-hidden"
    >

      <div className="relative w-full mx-auto px-12">

        {/* ===== Section Header ===== */}
        <div className="mb-20 text-center" data-aos="fade-up">

          <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-700 text-white rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            <FaCogs />
            Industrial Components
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Premium Domestic & Industrial <br />
            <span className="text-cyan-300">
              RO Parts & Components
            </span>
          </h2>

          <div className="mt-6 w-32 h-1 bg-cyan-400 rounded-full mx-auto"></div>

        </div>

        {/* ===== Parts Grid ===== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {parts.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative bg-cyan-700 p-8 rounded-3xl border border-cyan-600 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 overflow-hidden"
            >

              {/* Top line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-600 text-white text-xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-cyan-200 transition">
                {item.name}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default RoPartsSection;