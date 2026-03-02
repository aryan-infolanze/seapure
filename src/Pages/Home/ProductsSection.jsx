import React, { useState, useEffect } from "react";
import { X } from "lucide-react";


import filter1 from "../../assets/filter1.jpeg";
import filter2 from "../../assets/filter2.jpeg";
import filter3 from "../../assets/filter3.jpeg";
import filter4 from "../../assets/filter4.jpeg";
import filter5 from "../../assets/filter5.jpeg";

import minral1 from "../../assets/minral1.jpeg";
import minral2 from "../../assets/minral2.jpeg";
import minral3 from "../../assets/minral3.jpeg";

import aquaImg from "../../assets/aqua.jpeg";
import skid1 from "../../assets/skid1.jpeg";
import skid2 from "../../assets/skid2.jpeg";
import skid3 from "../../assets/skid3.jpeg";
import skid4 from "../../assets/skid4.jpeg";
import skid5 from "../../assets/skid5.jpeg";
import skid6 from "../../assets/skid6.jpeg";
import skid7 from "../../assets/skid7.jpeg";
import skid8 from "../../assets/skid8.jpeg";
import skid9 from "../../assets/skid9.jpeg";
import skid10 from "../../assets/skid10.jpeg";
import skid11 from "../../assets/skid11.jpeg";
import skid12 from "../../assets/skid12.jpeg";
import skid13 from "../../assets/skid13.jpeg";
import skid14 from "../../assets/skid14.jpeg";

import inlineImg from "../../assets/inlineimg.jpeg";
import standImg from "../../assets/stand.jpeg";

import housing1 from "../../assets/housing1.jpeg";
import housing2 from "../../assets/housing2.jpeg";
import housing3 from "../../assets/housing3.jpeg";
import housing4 from "../../assets/housing4.jpeg";
import housing5 from "../../assets/housing5.jpeg";

import copper1 from "../../assets/copper1.jpeg";
import copper2 from "../../assets/copper2.jpeg";
import copper3 from "../../assets/copper3.jpeg";
import copper4 from "../../assets/copper4.jpeg";
import copper5 from "../../assets/copper5.jpeg";

function ProductsSection() {
  const [selectedImage, setSelectedImage] = useState(null);



  const skidImages = [
    skid1, skid2, skid3, skid4, skid5, skid6, skid7,
    skid8, skid9, skid10, skid11, skid12, skid13, skid14
  ];

  const copperImages = [
    copper1, copper2, copper3, copper4, copper5
  ];

  const alkalineImages = [
    filter1, filter2, filter3, filter4, filter5
  ];

  const mineralImages = [
    minral1, minral2, minral3
  ];

  const housingImages = [
    housing1, housing2, housing3, housing4, housing5
  ];

  return (
    <>
      <section className="relative md:py-32 py-20 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          {/* ===== CENTER MAIN HEADING ===== */}
          <div className="text-center mb-28" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              Our Products
            </h2>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
          </div>

          {/* ===== SKID SECTION ===== */}
          <div className="mb-32" data-aos="fade-up">
            <div className="flex gap-3">
              <span className="w-2 h-10 bg-blue-900 rounded-full"></span>
              <h3 className="text-3xl font-bold text-blue-900 mb-10">
                Category Skids
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {skidImages.map((img, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  onClick={() => setSelectedImage(img)}
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Skid ${index + 1}`}
                    className="w-full h-[280px] object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== INLINE + CARBON SECTION ===== */}
      <div className="flex flex-col md:flex-row md:justify-around md:items-start gap-16 px-4 md:px-0">

  {/* Inline Filtration System */}
  <div className="mb-16 md:mb-32 md:w-1/3" data-aos="fade-right">
    <div className="flex gap-3">
      <span className="w-2 h-10 bg-blue-500 rounded-full"></span>
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-10">
        Inline Filtration System
      </h3>
    </div>

    <div
      onClick={() => setSelectedImage(inlineImg)}
      className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
    >
      <img
        src={inlineImg}
        alt="Inline Product"
        className="w-full h-64 sm:h-80 md:h-96 object-cover transition duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Category SS Stand */}
  <div className="mb-16 md:mb-32 md:w-1/3" data-aos="fade-up">
    <div className="flex gap-3">
      <span className="w-2 h-10 bg-blue-500 rounded-full"></span>
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
        Category SS Stand
      </h3>
    </div>

    <div
      onClick={() => setSelectedImage(standImg)}
      className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
    >
      <img
        src={standImg}
        alt="SS Stand"
        className="w-full h-64 sm:h-80 md:h-96 object-cover transition duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Category Carbon 4 */}
  <div className="mb-16 md:mb-32 md:w-1/3" data-aos="fade-left">
    <div className="flex gap-3">
      <span className="w-2 h-10 bg-cyan-500 rounded-full"></span>
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-10">
        Category Carbon 4
      </h3>
    </div>

    <div
      onClick={() => setSelectedImage(aquaImg)}
      className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
    >
      <img
        src={aquaImg}
        alt="Carbon Product"
        className="w-full h-64 sm:h-80 md:h-96 object-cover transition duration-500 hover:scale-105"
      />
    </div>
  </div>

</div>

          {/* ===== COPPER ===== */}
          <div className="mt-10" data-aos="fade-up">
            <div className="flex gap-3">
              <span className="w-2 h-10 bg-cyan-400 rounded-full"></span>
              <h3 className="text-3xl font-bold text-blue-900 mb-10">
                Copper RO Systems
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {copperImages.map((img, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  onClick={() => setSelectedImage(img)}
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Copper ${index + 1}`}
                    className="w-full h-[260px] object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== ALKALINE ===== */}
          <div className="mt-32" data-aos="fade-up">
            <div className="flex gap-3">
              <span className="w-2 h-10 bg-green-500 rounded-full"></span>
              <h3 className="text-3xl font-bold text-blue-900 mb-10">
                Category Alkaline
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {alkalineImages.map((img, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  onClick={() => setSelectedImage(img)}
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Alkaline ${index + 1}`}
                    className="w-full h-[260px] object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== MINERAL ===== */}
          <div className="mt-32" data-aos="fade-up">
            <div className="flex gap-3">
              <span className="w-2 h-10 bg-purple-500 rounded-full"></span>
              <h3 className="text-3xl font-bold text-blue-900 mb-10">
                Category Mineral Cartridge
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mineralImages.map((img, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  onClick={() => setSelectedImage(img)}
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Mineral ${index + 1}`}
                    className="w-full h-[260px] object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== HOUSING ===== */}
          <div className="mt-16" data-aos="fade-up">
            <div className="flex gap-3">
              <span className="w-2 h-10 bg-indigo-500 rounded-full"></span>
              <h3 className="text-3xl font-bold text-blue-900 mb-10">Category Housing</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {housingImages.map((img, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  onClick={() => setSelectedImage(img)}
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Housing ${index + 1}`}
                    className="w-full h-[260px] object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

export default ProductsSection;