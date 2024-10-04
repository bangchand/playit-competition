import React from "react";
import MainVideo from "../src/assets/hero_video.mp4";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import {
  FaTractor,
  FaTree,
  FaHandHoldingHeart,
  FaPaw,
  FaSeedling,
  FaSolarPanel,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 }, 
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1, 
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: 'Poppins', sans-serif;
  video {
    width: 100%;
    height: 100%;
    // filter: brightness(70%);
    object-fit: cover;
    object-position: center;
    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const GradientDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to top, rgba(0, 0, 0, 12), transparent);
  z-index: 10;
`;

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <VideoContainer>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 text-center p-4">
          <motion.h1
            className="text-5xl font-bold text-white font-poppins"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
           Selamat Datang di Desa Genggelang
          </motion.h1>
          <motion.p
            className="ml-2 mt-4 italic text-2xl text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeOut",
            }}
          >
           Kabupaten Lombok Utara, Nusa Tenggara Barat
          </motion.p>
        </div>
        <video src={MainVideo} loop muted autoPlay />
      </VideoContainer>
      <GradientDivider />

      <section id="potensi-desa" className="w-full p-20 bg-black">
        <h2 className="text-4xl font-bold text-white text-center">
          Potensi Desa
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTractor className="text-gray-600 text-6xl mx-auto mb-4" />,
              title: "Pertanian dan Perkebunan",
              desc: "Potensi utama Desa Genggelang dalam bidang pertanian, dengan hasil bumi seperti padi, jagung, dan sayuran.",
            },
            {
              icon: <FaTree className="text-gray-600 text-6xl mx-auto mb-4" />,
              title: "Pariwisata Alam",
              desc: "Desa Genggelang memiliki potensi wisata alam yang indah, seperti air terjun dan perbukitan yang cocok untuk trekking.",
            },
            {
              icon: <FaPaw className="text-gray-600 text-6xl mx-auto mb-4" />,
              title: "Peternakan",
              desc: "Peternakan sapi, kambing, dan unggas menjadi sektor ekonomi yang potensial di desa ini.",
            },
            {
              icon: <FaHandHoldingHeart className="text-gray-600 text-6xl mx-auto mb-4" />,
              title: "Kerajinan Lokal",
              desc: "Kerajinan tangan, seperti kain tenun dan anyaman bambu, menjadi kekayaan budaya yang dapat dikembangkan.",
            },
            {
              icon: <FaSeedling className="text-gray-600 text-6xl mx-auto mb-4" />,
              title: "Agrowisata",
              desc: "Agrowisata di Desa Genggelang memberikan pengalaman wisata edukatif bagi para pengunjung.",
            },
            {
              icon: <FaSolarPanel className="text-gray-600 text-6xl mx-auto mb-4" />,
              title: "Energi Terbarukan",
              desc: "Potensi pengembangan energi terbarukan seperti mikrohidro dan tenaga surya di Desa Genggelang.",
            },
          ].map((potensi, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {potensi.icon}
              <h3 className="text-2xl font-bold">{potensi.title}</h3>
              <p className="mt-2 text-gray-600">{potensi.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
