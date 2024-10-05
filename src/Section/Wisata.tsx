"use client";
import React from "react";
import terjun from "../assets/airterjun.jpg";
import rumahpohon from "../assets/rumahpohon.jpg";
import museum from "../assets/museum.jpg";
import tiupituq from "../assets/tiupituq.jpg";
import { LayoutGrid } from "../components/LayoutGrid";

export function LayoutGridDemo() {
  return (
    <div className="bg-black w-full">
        <div className="text-white text-[2.5rem] font-bold text-center">
          Tempat Wisata
        </div>
        <p className="text-green-600 mb-4 font-base text-center text-xl"> Desa Genggelang</p>
      <div className="relative w-full h-screen bg-black float-right">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Air Terjun Gangga
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Air Terjun Kerta Gangga memiliki keistimewaan yang tidak dimiliki air terjun lainnya. Keunikan air terjun ini ialah terdapat tiga air terjun yang alirannya sangat jernih. Kamu pun bisa menikmati ketiga air terjun ini sekaligus karena letaknya berdekatan.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rumah Pohon Gangga
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Tempat ini menyajikan spot foto di berbagai sudut lokasi dimana pengunjung dapat mengambil gambar dengan latar pemandangan alam yang indah. Terdapat juga panggung di tengah lokasi untuk atraksi seni, yoga, serta tempat berkumpul.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Museum Desa Genggelang
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Pengunjung dapat melihat benda-benda bersejarah peninggalan Kedatuan Gangga, serta mendengarkan sejarah tentang Kedatuan Gangga dan kampung Besari yang Hilang.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Air Terjun Tiu Pituq
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Tiu pituq adalah satu dari destinasi wisata di lombok utara yg bisa di tempuh dalam satu atau setengah hari dari mataram, dan bangsal , dan pengunjung bisa menikmati alam dengan mengambil gambar alam dengan spot2 kekinian dan mandi di kolam alami dan air terjun , yang berbagai macam bentuknya.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: terjun,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: rumahpohon,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: museum,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: tiupituq,
  },
];

const Wisata: React.FC = () => {
  return (
    <div>
      <LayoutGridDemo />
    </div>
  );
};

export default Wisata;
