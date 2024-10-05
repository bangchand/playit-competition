"use client";

import React from "react";
import styled from "styled-components";
import { CardBody, CardContainer, CardItem } from "../components/Card3D";
import { Link } from "react-router-dom";

const GallerySection = styled.section`
  padding: 5rem 2rem;
  background-color: #000000;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const GalleryHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
`;

const GalleryDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
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
    price: "Rp10.000-15.000",
    description:
      "Terbuat dari pisang raja kualitas terbaik hasil panen Desa Sambirejo.",
    imageUrl: "./src/assets/coffeebamboo.png",
  },
  {
    name: "Cokelat Senara",
    price: "Rp10.000-20.000",
    description: "Roti panggang berbentuk oval yang membawa Anda bernostalgia.",
    imageUrl: "./src/assets/cokelat.png",
  },
  {
    name: "Tas dari EcoPrint",
    price: "Rp5.000",
    description: "Tas terbuat dari ecoprint unik yang cocok untuk oleh-oleh.",
    imageUrl: "./src/assets/ecoprint.png",
  },
];

interface ThreeDCardDemoProps {
  product: Product;
}

const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({ product }) => {
  return (
    <CardContainer className="inter-var rounded-lg border-4 border-transparent transition-all duration-300 hover:border-gray-300">
      <CardBody className="bg-[#141414] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {product.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {product.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={product.imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={product.name}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            {product.price}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};


const UMKMGallery: React.FC = () => {
  return (
    <GallerySection id="umkm">
      <GalleryHeader>Dukung UMKM Desa Wisata Genggelang!</GalleryHeader>
      <GalleryDescription className="text-zinc-400">
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
