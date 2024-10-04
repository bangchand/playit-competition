import React from "react";

const Profile: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black min-h-screen p-8 relative">
      {/* Background Pattern for Better Glassmorphism Effect */}
      <div className="absolute inset-0  opacity-30 pointer-events-none"></div>

      <div className="absolute left-[10%] top-10 z-50 backdrop-blur-md bg-white/20 p-8 text-white rounded-xl shadow-lg max-w-md md:max-w-lg md:mr-8 mb-8 md:mb-0 border border-white/30">
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

      <h1 className="absolute top-16 right-[10%] text-white text-3xl font-semibold mb-4">
        DESA WISATA GENGGELANG
      </h1>

      <h1 className="absolute bottom-[20%] left-[10%] text-white text-3xl font-semibold mb-4">
        MENJELAJAHI KEINDAHAN <br /> DESA GENGGELANG
      </h1>

      <div className="absolute right-[10%] w-full md:w-1/2 max-w-4xl">
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
    </section>
  );
};

export default Profile;
