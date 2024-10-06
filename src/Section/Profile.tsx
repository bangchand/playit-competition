import React from "react";

const Profile: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black min-h-screen p-4 md:p-8 relative mb-40">
      <div className="absolute inset-0 opacity-30 pointer-events-none"></div>

      <h1 className="hidden md:block text-center md:absolute md:top-16 md:right-[10%] text-white text-xl md:text-3xl font-semibold mb-4">
        DESA WISATA GENGGELANG
      </h1> 

      <h1 className="block md:hidden text-center text-[1.5rem] md:text-[2.5rem] md:absolute md:top-16 md:right-[10%] text-white font-semibold mb-4">
        Desa Wisata Genggelang
      </h1> 
      

      <div className="w-full md:w-1/2 max-w-4xl md:-right-[40%] px-2 mb-0 md:mb-30 relative z-40">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/LOKq_bmPYlY"
            title="Cultural Activity in Desa Genggelang"
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h1 className="block md:hidden text-center italic mb-8 text-sm md:text-[2.5rem] md:absolute md:top-16 md:right-[10%] text-zinc-400 font-base">
        Youtube: Desa Wisata Genggelang
      </h1> 

      {/* Text Content */}
      <div className="relative z-50 md:absolute md:left-[10%] backdrop-blur-md bg-[#141414] p-4 md:p-8 text-white/80 rounded-xl shadow-lg max-w-md md:max-w-lg md:mr-8 mb-8 md:mb-0 md:border border-white/30">
        <p className="text-sm md:text-base mb-4">
          Desa Genggelang, yang terletak di Kecamatan Gangga, Kabupaten Lombok
          Utara, adalah destinasi wisata menawan dengan panorama alam yang
          indah. Menawarkan atraksi seperti Air Terjun Kerta Gangga, Tiu Pituq,
          dan Spot Foto Gangga Murmas, desa ini juga memiliki museum yang
          menampilkan peninggalan Kedatuan Gangga dan situs bersejarah Kampung
          Besari.
        </p>
        <p className="text-sm md:text-base mb-4">
          Atraksi wisata meliputi Air Terjun Kerta Gangga, museum Kedatuan
          Gangga, dan hasil perkebunan kopi, kakao, serta produk lokal ramah
          lingkungan.
        </p>
      </div>

      <h1 className="hidden md:block absolute bottom-[20%] left-[5%] md:left-[10%] text-white text-xl md:text-3xl font-semibold mb-4">
        MENJELAJAHI KEINDAHAN <br /> DESA GENGGELANG
      </h1>
    </section>
  );
};

export default Profile;
