"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/Text";
import Navbar from "../components/Navbar";
import { Spotlight } from "../components/Spotlight";
import { Timeline } from "../components/Timeline";
import Footer from "../components/Footer";

const World = React.lazy(() =>
  import("../components/Globe").then((module) => ({ default: module.World }))
);

export function About() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const data = [
    {
      title: "Kehidupan Awal",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm lg:text-base xl:text-lg font-normal mb-8">
            Desa ini awalnya merupakan pemukiman kecil yang dihuni oleh
            masyarakat yang mengandalkan pertanian dan peternakan sebagai sumber
            kehidupan. Kegiatan agraris ini menjadi tulang punggung perekonomian
            desa dan menjadikan Genggelang pusat sosial dan ekonomi di
            sekitarnya.
          </p>
        </div>
      ),
    },
    {
      title: "Pembentukan Desa",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm lg:text-base xl:text-lg font-normal mb-8">
            Desa Genggelang secara resmi dibentuk pada awal abad ke-20, sekitar
            tahun 1920-an, sebagai bagian dari kebijakan pemerintahan kolonial
            Belanda untuk mengatur administrasi di Lombok.
          </p>
        </div>
      ),
    },
    {
      title: "Transformasi Pasca-Kemerdekaan",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm lg:text-base xl:text-lg font-normal mb-8">
            Setelah kemerdekaan Indonesia, Desa Genggelang mengalami
            transformasi besar. Pada periode 1960-an hingga 1980-an, pembangunan
            infrastruktur, seperti jalan dan jembatan, mendukung pertumbuhan
            desa.
          </p>
        </div>
      ),
    },
    {
      title: "Jejak Berdirinya",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm lg:text-base xl:text-lg font-normal mb-8">
            Berdirinya Desa Genggelang merupakan hasil perjuangan masyarakat
            lokal untuk memiliki identitas dan kedaulatan. Para sesepuh dan
            tokoh masyarakat berperan penting dalam mendorong pembentukan desa.
          </p>
        </div>
      ),
    },
    {
      title: "Perkembangan Terkini",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm lg:text-base xl:text-lg font-normal mb-8">
            Desa Genggelang telah mengalami perkembangan pesat dalam
            infrastruktur dan ekonomi, termasuk kemudahan akses ke pasar dan
            layanan publik. Transformasi ini berdampak positif pada pariwisata
            dan UMKM lokal.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen container">
        <div className="flex my-20 lg:mt-52 lg:mb-0">
          <div className="bg-[rgba(15,99,15,0.2)] w-full sm:w-[800px] h-[400px] blur-[80px] rounded-full absolute top-0 right-0"></div>
          <div className="bg-[rgba(15,99,15,0.2)] w-full sm:w-[800px] h-[400px] blur-[80px] rounded-full absolute top-52 right-96"></div>
          <div className="hidden lg:block text-white w-full lg:w-1/2">
            <h1
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease"
              data-aos-delay="0"
              className="text-white hidden lg:block text-[2rem] md:text-[3rem] md:px-0 font-bold font-poppins mb-3"
            >
              Profile Desa Genggelang
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease"
              data-aos-delay="600"
              className="lg:text-base xl:text-xl italic max-w-lg mb-6"
            >
              <span className="font-semibold text-green-600">
                Desa Genggelang
              </span>{" "}
              terletak di Kabupaten Lombok Utara, Nusa Tenggara Barat, dan
              merupakan bagian dari Kecamatan Gangga.
            </p>

            <p
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease"
              data-aos-delay="1200"
              className="lg:text-base xl:text-xl italic max-w-lg"
            >
              Nama{" "}
              <span className="font-semibold text-green-600">'Genggelang'</span>{" "}
              berasal dari cerita rakyat yang diwariskan secara lisan. Ada dua
              versi mengenai asal usul nama ini:{" "}
              <span className="font-semibold text-green-600">
                Tanaman Hutan dan Bahasa Setempat.
              </span>
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto relative w-full">
              <div className="max-w-7xl mx-auto w-full relative h-full md:h-[40rem]">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="div"
                >
                  <h1
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                    data-aos-delay="0"
                    className="text-white block lg:hidden text-[2rem] md:text-[3rem] md:px-0 font-bold font-poppins mb-3"
                  >
                    Profile Desa Genggelang
                  </h1>

                  <p
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                    data-aos-delay="600"
                    className="block lg:hidden text-white lg:text-base xl:text-xl italic max-w-lg mb-6"
                  >
                    <span className="font-semibold text-green-600">
                      Desa Genggelang
                    </span>{" "}
                    terletak di Kabupaten Lombok Utara, Nusa Tenggara Barat, dan
                    merupakan bagian dari Kecamatan Gangga.
                  </p>

                  <p
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-easing="ease"
                    data-aos-delay="1200"
                    className="block lg:hidden text-white lg:text-base xl:text-xl italic max-w-lg"
                  >
                    Nama{" "}
                    <span className="font-semibold text-green-600">
                      'Genggelang'
                    </span>{" "}
                    berasal dari cerita rakyat yang diwariskan secara lisan. Ada
                    dua versi mengenai asal usul nama ini:{" "}
                    <span className="font-semibold text-green-600">
                      Tanaman Hutan dan Bahasa Setempat.
                    </span>
                  </p>
                </motion.div>
                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent z-40" />
                <div className="absolute w-full h-96 lg:h-[35rem] lg:-top-40 xl:h-full z-10">
                  <Suspense fallback={<div>Loading...</div>}>
                    <World data={sampleArcs} globeConfig={globeConfig} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-96 relative">
          <Spotlight
            className="hidden lg:block -left-20 -top-80"
            fill="white"
          />
          <Timeline data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
