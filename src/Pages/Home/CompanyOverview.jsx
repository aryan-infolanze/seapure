import React from "react";
import overviewImage from "../../assets/img39.jpg";
import { FaWater, FaIndustry, FaAward, FaBuilding } from "react-icons/fa";

function CompanyOverview({ id }) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px" }}
      className="md:py-20 py-20 bg-cyan-800"
    >
      <div className="w-full mx-auto px-12">

        {/* ===== BADGE ===== */}
        <div className="text-center md:mb-16 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-700 text-white rounded-full text-sm font-semibold tracking-widest uppercase">
            <FaBuilding />
            Company Overview
          </div>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ===== IMAGE ===== */}
          <div data-aos="fade-left">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={overviewImage}
                alt="Company Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ===== CONTENT ===== */}
          <div data-aos="fade-right">

            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Engineering Purity <br />
              <span className="text-cyan-300">
                Delivering Trust
              </span>
            </h2>

            <p className="mt-8 text-cyan-100 leading-relaxed font-medium text-lg">
              Shreya Water Tech LLP is an ISO 9001:2008 certified company
              specializing in the manufacturing and supply of Reverse Osmosis
              (RO) systems and components. Established in 2005, we continue to
              evolve with modern technology and industry standards to deliver
              reliable and high-performance water purification solutions.
            </p>

            {/* ===== FEATURES ===== */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-700 text-white">
                  <FaIndustry />
                </div>
                <p className="text-cyan-100 font-semibold">
                  Advanced Manufacturing & Engineering
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-700 text-white">
                  <FaWater />
                </div>
                <p className="text-cyan-100 font-semibold">
                  High Quality RO Systems & Components
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-700 text-white">
                  <FaAward />
                </div>
                <p className="text-cyan-100 font-semibold">
                  ISO Certified Quality Standards
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;