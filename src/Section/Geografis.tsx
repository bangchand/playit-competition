import React from "react";
import letakGeografis from "../assets/geografis.png";

const Geografis: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black min-h-screen p-8 relative mt-32 mb-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none"></div>

      <div className="md:absolute md:top-24 md:right-[10%] w-full md:w-auto text-center md:text-right mb-6 md:mb-0">
        <p className="text-green-600 text-lg">
          Peta Desa Genggelang
        </p>
        <h1 className="text-white text-[2rem] md:text-[2.5rem] font-bold mb-2">
          Letak Geografis
        </h1>
      </div>

      <div className="w-full md:w-1/2 max-w-4xl mb-4 md:mb-0 md:absolute md:left-[10%] md:top-[15%]">
        <img
          src={letakGeografis}
          alt="Peta Desa Genggelang"
          className="w-full object-cover rounded-lg"
        />
      </div>

      <h1 className="absolute top-[15%] left-[10%] md:top-[66%] text-white/70 transition-all duration-300 hover:text-white italic pl-3 pt-2 text-xs md:text-sm mb-4">
      Kabupaten Lombok Utara, Nusa Tenggara Barat
      </h1>

      {/* Deskripsi desa */}
      <div className="bg-[#141414] backdrop-blur-md p-6 text-white/80 rounded-xl shadow-lg border border-white/30 w-full md:w-auto md:max-w-md md:mb-0 md:absolute md:left-[63%] md:top-[27%]">
        <p className="text-sm md:text-base mb-4">
          Desa Genggelang, yang terletak di Kecamatan Gangga, Kabupaten Lombok
          Utara, adalah destinasi wisata menawan dengan panorama alam yang
          indah. Menawarkan atraksi seperti Air Terjun Kerta Gangga, Tiu Pituq,
          dan Spot Foto Gangga Murmas, desa ini juga memiliki museum yang
          menampilkan peninggalan Kedatuan Gangga dan situs bersejarah Kampung
          Besari.
        </p>
        <p className="text-sm md:text-base">
          Atraksi wisata meliputi Air Terjun Kerta Gangga, museum Kedatuan
          Gangga, dan hasil perkebunan kopi, kakao, serta produk lokal ramah
          lingkungan.
        </p>
      </div>
    </section>
  );
};

export default Geografis;
