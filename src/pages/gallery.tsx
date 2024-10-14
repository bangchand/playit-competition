"use client";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { AuroraBackground } from "../components/AuroraBackground";

// Gambar
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img5 from "../assets/gallery/img5.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img7 from "../assets/gallery/img7.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";
import img10 from "../assets/gallery/img10.png";
import img12 from "../assets/gallery/img12.jpg";
import img13 from "../assets/gallery/img13.jpg";
import img14 from "../assets/gallery/img14.jpg";
import img15 from "../assets/gallery/img15.jpg";
import img16 from "../assets/gallery/img16.jpg";
import img17 from "../assets/gallery/img17.jpg";
import img18 from "../assets/gallery/img18.jpg";
import img19 from "../assets/gallery/img19.jpg";
import { FocusCards } from "../components/FocusCard";

const GradientDivider = styled.div`
  position: absolute;
  bottom: -3%;
  left: 0;
  width: 100%;
  height: 500px;
  background: linear-gradient(to top, rgba(0, 0, 0, 12), transparent);
  z-index: 10;

  @media (max-width: 768px) {
    bottom: -5%;
    height: 250px;
  }
`;

export function LayoutGridDemo() {
  const cards = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
    {
      src: img5,
    },
    {
      src: img6,
    },
    {
      src: img7,
    },
    {
      src: img8,
    },
    {
      src: img9,
    },
    {
      src: img10,
    },
    {
      src: img12,
    },
    {
      src: img13,
    },
    {
      src: img14,
    },
    {
      src: img15,
    },
    {
      src: img16,
    },
    {
      src: img17,
    },
    {
      src: img18,
    },
    {
      src: img19,
    },
  ];
  return (
    <>
      <Navbar />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col md:gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-neutral-200 text-center">
            Galeri Desa Genggelang
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
            Selamat Menikmati.
          </div>
        </motion.div>
      </AuroraBackground>
      <GradientDivider />
      <div className="w-full bg-black bg-grid-white/[0.2] relative flex justify-center p-6">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto my-20">
          <FocusCards cards={cards} />
        </div>
      </div>
    </>
  );
}

const Gallery: React.FC = () => {
  return (
    <div>
      <LayoutGridDemo />
    </div>
  );
};

export default Gallery;
