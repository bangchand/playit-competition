import React from "react";
import MainVideo from "../src/assets/hero_video.mp4";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Profile from "../src/Section/Profile";
import { motion } from "framer-motion";
import {
  FaTractor,
  FaTree,
  FaHandHoldingHeart,
  FaPaw,
  FaSeedling,
  FaSolarPanel,
} from "react-icons/fa";
import { ImMoveUp } from "react-icons/im";

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
import { potensiDesa } from "../src/dataPotensi";
// import { GridBackground } from "./components/GridBackground";
import { HoverEffect } from "../src/components/CardHover";



const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: "Poppins", sans-serif;
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
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Potensi Desa
        </h2>
        <div className="text-white text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg">
            Potensi daerah adalah kemampuan suatu daerah yang berupa sumber daya
            yang bisa digunakan, dieksploitasi, dan diambil manfaatnya untuk
            dikembangkan secara lebih lanjut sehingga bisa meningkatkan dan
            menciptakan kemampuan wilayah yang memadai.
          </p>
        </div>
<<<<<<< HEAD
        {/* HoverEffect component for Potensi Desa */}
=======

>>>>>>> 6c46799ba82db40bdd522babeeaaed4427435b2f
        <div className="mt-12">
          <HoverEffect items={potensiDesa} />
        </div>
      </section>

      <Profile />
    </>
  );
};

export default Home;
