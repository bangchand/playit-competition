
"use client";

import React from "react";
import styled from "styled-components";
import { CardBody, CardContainer, CardItem } from "../components/Card3D";
import cokelat from "../assets/cokelat.png";
import bamboo from "../assets/coffeebamboo.png";
import ecoprint from "../assets/ecoprint.png";
// import { Link } from "react-router-dom";

const GallerySection = styled.section`
  padding: 0 1rem;
  margin: 2rem 1rem;
  background-color: #000000;
  font-family: "Poppins", sans-serif;
  text-align: center;

  @media (min-width: 640px) {
    padding: 5rem 3rem;
    margin: 2.5rem;
  }
`;

const GalleryHeader = styled.h2`
  color: white;
  margin-bottom: 2rem;
`;

const GalleryDescription = styled.p`
  margin-bottom: 3rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem; /* Mengurangi gap antara card */
  justify-content: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

interface Product {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const products = [
  {
    name: "Coffee Bamboo",
    price: "Rp10.000-15.000 (perkiraan Harga)",
    description:
      "Kami meyediakan buah tangan brupa berbagai macam pruduk ada tas bambu ada juga gelas yang di buat dari bambu bok bambu untuk pengemasan kopi bubuk yang siap saji",
    imageUrl: bamboo,
  },
  {
    name: "Cokelat Senara",
    price: "Rp10.000-20.000 (perkiraan Harga)",
    description:
      "Saat merasa stres dan depresi akan segala rutinitas yang padat dan membosankan, memakan sebatang coklat mungkin akan membuat perasaan #Sobatwisata lebih baik.",
    imageUrl: cokelat,
  },
  {
    name: "Tas dari EcoPrint",
    price: "Rp15.000-30.000 (perkiraan Harga)",
    description:
      "Desa Genggelang ini juga punya karya seni Ecoprint. Ecoprint adalah sebuah usaha seni dan kerajinan yang berfokus pada teknik ecoprint atau eco-printing. #Sobatwisata pasti tertarik",
    imageUrl: ecoprint,
  },
];

interface ThreeDCardDemoProps {
  product: Product;
}

const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({ product }) => {
  return (
    <CardContainer className="inter-var rounded-lg border-4 border-transparent transition-all duration-300 hover:border-gray-300">
      <CardBody className="bg-[#141414] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-2 sm:p-4"> {/* Kurangi padding di mobile */}
        <CardItem
          translateZ="150"
          className="text-base sm:text-lg font-bold text-white transition-all duration-300 group-hover/card:text-white group-hover/card:bg-white/10 backdrop-blur-sm rounded-xl p-1 px-2"
        >
          {product.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="150"
          className="text-neutral-500 transition-all duration-300 group-hover/card:text-white group-hover/card:bg-white/10 backdrop-blur-sm rounded-xl p-2 text-left text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {product.description}
        </CardItem>
        <CardItem translateZ="180" className="w-full mt-4">
          <img
            src={product.imageUrl}
            height="500"
            width="500"
            className="h-32 sm:h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={product.name}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6 sm:mt-12">
          <CardItem
            translateZ={20}
            as="p"
            // href="https://twitter.com/mannupaaji"
            // target="__blank"
            className="px-3 py-2 rounded-xl text-xs font-normal text-white"
          >
            {product.price}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};


const UMKMGallery: React.FC = () => {
  return (
    <GallerySection id="umkm">
      <GalleryHeader className="text-[2rem] md:text-[2.5rem]">
        <h1 className="text-white text-[2rem] md:text-[2.5rem] font-bold">
          Dukung UMKM!
        </h1>
      <p className="text-green-600 text-base ">
       Desa Wisata Genggelang
        </p>
      </GalleryHeader>
      <GalleryDescription className="text-base md:text-[1.2rem] text-zinc-400">
        Temukan keunikan produk lokal mereka dan jadikan kunjungan Anda berarti
        dengan mendukung usaha-usaha kecil di sini.
      </GalleryDescription>
      <ProductGrid>
        {products.map((product, index) => (
          <ThreeDCardDemo key={index} product={product} />
        ))}
      </ProductGrid>
    </GallerySection>
  );
};

export default UMKMGallery;

