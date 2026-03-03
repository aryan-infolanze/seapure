import React, { useEffect } from "react";


const parts = [
    "Inline Filter",
    "Alkaline Filter",
    "B12 Copper Filter",
    "Mineral Cartridges",
    "Filter Housing",
    "RO Pipe (1/4, 3/8)",
    "Member Housing Adaptor",
    "SMPS",
    "All Type RO Stand",
    "Custom Industrial RO Solutions",
    "Domestic RO System Setup",
    "Maintenance & Spare Parts"
];

function RoPartsSection({id}) {

    return (
        <section id={id} style={{ scrollMarginTop: '96px' }}  className="relative md:py-32 py-20 bg-sky-50 overflow-hidden">

            {/* ===== Industrial Grid Background ===== */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.03]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="smallGridParts"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#0288d1"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGridParts)" />
            </svg>

            {/* Soft Glow */}
            {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div> */}

            <div className="relative max-w-7xl mx-auto px-6">

                {/* ===== Section Header ===== */}
                <div 
                    className="mb-20 text-center"
                    data-aos="fade-up"
                >
                    <div className="inline-flex items-center gap-3 mb-6">

                        {/* Animated Dot */}
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0288d1]"></span>
                        </span>

                        <span className="uppercase tracking-widest text-sm font-bold text-blue-600">
                            Industrial Components
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
                        Import All Domestic & <br />
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                            Industrial RO Parts
                        </span>
                    </h2>

                    <div className="mt-6 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
                </div>

                {/* ===== Parts Grid ===== */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {parts.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-blue-100 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-3 overflow-hidden"
                        >

                            {/* Top Gradient Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>

                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000"></div>

                            <h3 className="relative text-blue-900 font-semibold text-lg group-hover:text-blue-600 transition duration-300">
                                {item}
                            </h3>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default RoPartsSection;