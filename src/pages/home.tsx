import React from "react";
import MainVideo from "/hero_video.mp4";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Genggelang from "/logogenggelang.png";
import Ntb from "/logontb.svg";
import Profile from "../Section/Profile";
// import { motion } from "framer-motion";
import UMKMGallery from "../Section/Umkm";
import Geografis from "../Section/Geografis";
import { Wisata } from "../Section/Wisata";
import Potensi from "../Section/Potensi";
import { TextGenerateEffect } from "../components/Text";
import Footer from "../components/Footer";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: black;
  position: relative;
  font-family: "Poppins", sans-serif;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;

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
  bottom: -3%;
  left: 0;
  width: 100%;
  height: 500px;
  background: linear-gradient(to top, rgba(4, 5, 4, 12), transparent);
  z-index: 10;

  @media (max-width: 768px) {
    bottom: -5%;
    height: 250px;
  }
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
  }
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
    <>
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
      <VideoContainer id="section-two">
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 text-center">
          <TextGenerateEffect
            words="Selamat Datang di Desa Genggelang"
            className="text-[2rem] md:text-[3rem] md:px-0 font-bold text-white font-poppins"
            filter={true}
            duration={1.2}
          />
          <TextGenerateEffect
            words="Kabupaten Lombok Utara, Nusa Tenggara Barat"
            className="mt-3 md:text-xl ml-2 italic px-16"
            filter={true}
            duration={2}
          />
        </div>
        <video src={MainVideo} loop muted autoPlay />
      </VideoContainer>

      <div className="container">
        <GradientDivider />
        <Potensi />
        <Profile />
        <div className="relative">
          <div className="bg-[rgba(15,99,15,0.2)] w-full sm:w-[800px] h-[400px] blur-[80px] rounded-full absolute -left-10"></div>
          <div className="bg-[rgba(15,99,15,0.2)] w-[200px] sm:w-[600px] h-[400px] blur-[80px] rounded-full absolute right-0 top-96 sm:top-44"></div>
          <UMKMGallery />
        </div>
        <Geografis />
        <Wisata />
      </div>
      <Footer />
    </>
  );
};

export default Home;
