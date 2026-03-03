import React from "react";
import overviewImage from "../../assets/img39.jpg";

function CompanyOverview({ id }) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "96px" }}
      className="md:py-28 py-20 bg-sky-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ===== RIGHT SIDE IMAGE ===== */}
        <div data-aos="fade-left">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={overviewImage}
              alt="Company Overview"
              className="w-full md:h-auto"
            />
          </div>
        </div>

        {/* ===== LEFT CONTENT ===== */}
        <div data-aos="fade-right">

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Engineering Purity. <br />
            <span className="text-blue-600">
              Delivering Trust.
            </span>
          </h2>

          <p className="mt-8 text-blue-800 leading-relaxed font-semibold text-lg">
            Shreya Water Tech LLP, an ISO 9001:2008 certified company, is one of the leading manufacturers and suppliers of Reverse Osmosis (RO) systems and its components. Established in 2005, the company continuously upgrades itself with the latest technology and market trends to adapt to customer needs while maintaining strict quality checks and precision manufacturing standards.
          </p>

        </div>

      </div>
    </section>
  );
}

export default CompanyOverview;