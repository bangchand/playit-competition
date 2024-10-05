import React from "react";
import letakGeografis from "../assets/geografis.png"

const Geografis: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black min-h-screen p-8 relative">
      {/* Background Pattern for Better Glassmorphism Effect */}
      <div className="absolute inset-0  opacity-30 pointer-events-none"></div>

    

      <h1 className="absolute top-16 right-[10%] text-white text-[2.5rem] font-semibold mb-4">
        Letak Geografis
      </h1>

      <h1 className="absolute bottom-[16%] left-[10%] text-white text-xl font-semibold mb-4">
        Peta Desa Genggelang
      </h1>

      <div className="absolute left-[10%] w-full md:w-1/2 max-w-4xl">
        <div className="relative w-full h-0 pb-[56.25%]">
          <img src={letakGeografis} alt="" />
        </div>
        <div className="absolute -right-[75%] top-4 z-50 backdrop-blur-md bg-[#141414] p-8 text-white/80 rounded-xl shadow-lg max-w-md md:max-w-lg md:mr-8 mb-8 md:mb-0 border border-white/30">
        <p className="text-lg mb-4">
          Desa Genggelang, yang terletak di Kecamatan Gangga, Kabupaten Lombok
          Utara, adalah destinasi wisata menawan dengan panorama alam yang
          indah. Menawarkan atraksi seperti Air Terjun Kerta Gangga, Tiu Pituq,
          dan Spot Foto Gangga Murmas, desa ini juga memiliki museum yang
          menampilkan peninggalan Kedatuan Gangga dan situs bersejarah Kampung
          Besari.
        </p>
        <p className="text-lg mb-4">
          Atraksi wisata meliputi Air Terjun Kerta Gangga, museum Kedatuan
          Gangga, dan hasil perkebunan kopi, kakao, serta produk lokal ramah
          lingkungan.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Geografis;
