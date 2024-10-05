import React from "react";
import MainVideo from "/hero_video.mp4";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Genggelang from "/logogenggelang.png";
import Ntb from "/logontb.svg";
import Profile from "../src/Section/Profile";
import { motion } from "framer-motion";
import { potensiDesa } from "../src/dataPotensi";
// import { GridBackground } from "./components/GridBackground";
import { HoverEffect } from "../src/components/CardHover";
import UMKMGallery from "./Section/Umkm";
import Geografis from "./Section/Geografis";

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

const LogoContainer = styled.div`
  position: absolute;
  z-index: 20;
  top: 10px;
  width: 100px;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    display: none;
`;

const LeftLogo = styled(LogoContainer)`
  left: 10px;
  max-width: 80px;
`;

const RightLogo = styled(LogoContainer)`
  top: 20px;
  right: 30px;
  max-width: 50px;
`;

const Home: React.FC = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <LeftLogo>
        <a
          href="https://www.google.com/search?q=Desa+Genggelang&rlz=1C5GCEM_enID1114ID1114&oq=Desa+Genggelang&gs_lcrp=EgZjaHJvbWUqDAgAEEUYOxjjAhiABDIMCAAQRRg7GOMCGIAEMgYIARBFGDsyBwgCEC4YgAQyBggDEEUYOzIGCAQQRRhAMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINTcxOWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Genggelang} alt="Logo Genggelang" />
        </a>
      </LeftLogo>
      <RightLogo>
        <a
          href="https://www.google.com/search?q=Nusa+Tenggara+Barat&rlz=1C5GCEM_enID1114ID1114&oq=Nusa+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCggCEC4YsQMYgAQyCggDEC4YsQMYgAQyBggEEEUYOTIKCAUQLhixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABDINCAgQABiDARixAxiABNIBCDEyNjBqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Ntb} alt="Logo NTB" />
        </a>
      </RightLogo>
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
        <video src={MainVideo} loop muted autoPlay className="fade-down" />
      </VideoContainer>
      {/* <GradientDivider /> */}

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
        <div className="mt-12">
          <HoverEffect items={potensiDesa} />
        </div>
      </section>

      <Profile />
      <UMKMGallery />
      <Geografis />
    </div>
  );
};

export default Home;
