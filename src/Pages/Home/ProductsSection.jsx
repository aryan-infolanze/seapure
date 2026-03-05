import React, { useState } from "react";
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

  const copperImages = [copper1, copper2, copper3, copper4, copper5];
  const alkalineImages = [filter1, filter2, filter3, filter4, filter5];
  const mineralImages = [minral1, minral2, minral3];
  const housingImages = [housing1, housing2, housing3, housing4, housing5];

  const ProductCard = ({ img }) => (
    <div
      onClick={() => setSelectedImage(img)}
      className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition"
    >
      <img
        src={img}
        className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
        <p className="text-white text-sm font-semibold">View Product</p>
      </div>
    </div>
  );

  const SectionTitle = ({ title }) => (
    <div className="flex items-center gap-4 mb-12">
      <span className="w-2 h-10 bg-cyan-600 rounded-full"></span>
      <h3 className="text-3xl font-bold text-cyan-800">{title}</h3>
    </div>
  );

  return (
    <>
      <section className="py-28 bg-gradient-to-b from-white to-slate-50">

        <div className="w-full mx-auto px-12">

          {/* MAIN HEADING */}
          <div className="text-center mb-24">
            <h2 className="text-5xl font-extrabold text-cyan-800">
              Our Products
            </h2>

            <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>

            <p className="text-slate-500 mt-6 max-w-xl mx-auto">
              Premium industrial RO components and advanced filtration systems.
            </p>
          </div>

          {/* SKIDS */}
          <div className="mb-28">
            <SectionTitle title="Category Skids" />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skidImages.map((img, i) => (
                <ProductCard key={i} img={img} />
              ))}
            </div>
          </div>

          {/* INLINE + STAND + CARBON */}
          <div className="grid md:grid-cols-3 gap-10 mb-28">

            <div>
              <SectionTitle title="Inline Filtration System" />
              <ProductCard img={inlineImg} />
            </div>

            <div>
              <SectionTitle title="Category SS Stand" />
              <ProductCard img={standImg} />
            </div>

            <div>
              <SectionTitle title="Category Carbon 4" />
              <ProductCard img={aquaImg} />
            </div>

          </div>

          {/* COPPER */}
          <div className="mb-28">
            <SectionTitle title="Copper RO Systems" />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {copperImages.map((img, i) => (
                <ProductCard key={i} img={img} />
              ))}
            </div>
          </div>

          {/* ALKALINE */}
          <div className="mb-28">
            <SectionTitle title="Category Alkaline" />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {alkalineImages.map((img, i) => (
                <ProductCard key={i} img={img} />
              ))}
            </div>
          </div>

          {/* MINERAL */}
          <div className="mb-28">
            <SectionTitle title="Mineral Cartridge" />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {mineralImages.map((img, i) => (
                <ProductCard key={i} img={img} />
              ))}
            </div>
          </div>

          {/* HOUSING */}
          <div>
            <SectionTitle title="Category Housing" />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {housingImages.map((img, i) => (
                <ProductCard key={i} img={img} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 bg-cyan-600 text-white p-3 rounded-full hover:bg-cyan-700 transition"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
          />

        </div>
      )}
    </>
  );
}

export default ProductsSection;