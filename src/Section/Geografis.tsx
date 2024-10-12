import React from "react";
import letakGeografis from "../assets/geografis.png"
import { PinContainer } from "../components/3DPin";

const Geografis: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black min-h-screen p-8 relative mt-32 mb-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none"></div>

      <div className="md:absolute md:top-24 md:right-[10%] w-full md:w-auto text-center md:text-right mb-6 md:mb-0">
        <p className="text-green-600 text-lg">Peta Desa Genggelang</p>
        <h1 className="text-white text-[2rem] md:text-[2.5rem] font-bold mb-2">
          Letak Geografis
        </h1>
      </div>

      <div className="relative w-full md:w-1/2 max-w-4xl mb-4 md:mb-0 md:absolute md:left-[10%] md:top-[15%]">
        <img
          src={letakGeografis}
          alt="Peta Desa Genggelang"
          className="block md:hidden w-full object-cover rounded-lg"
        />

        <PinContainer
          title="Desa Bentek"
          to="#"
          containerClassName="hidden md:block w-full h-full absolute top-56 "
        >
          <p></p>
        </PinContainer>
      </div>

      <h1 className="absolute top-[14%] left-[10%] md:top-[66%] text-white/70 transition-all duration-300 hover:text-white italic pl-3 pt-2 text-xs md:text-sm mb-4">
        Kabupaten Lombok Utara, Nusa Tenggara Barat
      </h1>


      <div className="bg-[#141414] backdrop-blur-md p-4 text-white/80 rounded-xl shadow-lg md:border border-white/30 w-full md:w-auto md:max-w-md md:mb-0 md:absolute md:left-[63%] md:top-[27%]">
        <p className="text-sm md:text-base mb-4">
          - Sebelah Utara: Desa Genggelang berbatasan langsung dengan Laut Jawa,
          memberikan akses ke kawasan pantai. <br />
          - Sebelah Timur: Berbatasan dengan
          Desa Gondang, yang juga terletak di Kabupaten Lombok Utara. <br />
          - Sebelah Selatan: Desa ini berbatasan dengan Desa Rempek, salah satu desa
          tetangga di bagian selatan. <br />
          - Sebelah Barat: Berbatasan dengan Desa
          Bentek, desa yang terletak di sisi barat Desa Genggelang.
        </p>
        <p className="text-sm md:text-base">
        Lokasi Desa Genggelang berada di wilayah Kabupaten Lombok Utara, dan memiliki akses ke Laut Jawa serta dikelilingi oleh hutan tropis di bagian barat daya.-7
        </p>
      </div>
    </section>
  );
};

export default Geografis;
