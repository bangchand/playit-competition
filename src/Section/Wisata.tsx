"use client";
// Assets
import terjun from "../assets/airterjun.jpg";
import rumahpohon from "../assets/rumahpohon.jpg";
import museum from "../assets/museumdesagenggelang.webp";
import petikcoklat from "../assets/petik-coklat.jpg";
import tiupituq from "../assets/tiupituq.jpg";
import tiungumbak from "../assets/tiungumbak.jpg";
import tiupupus from "../assets/tiupupus.jpg";
import { DirectionAwareHover } from "../components/DirectiveAwareHover";

export function Wisata() {
  return (
    <>
      <div className="my-32">
        <div className="text-white text-[2rem] md:text-[2.5rem] font-bold text-center">
          Tempat Wisata
        </div>
        <p className="text-green-600 mb-4 font-base text-center text-lg md:text-xl">
          {" "}
          Desa Genggelang
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative h-[224px] md:h-[274px] lg:h-[324px] xl:h-[374px] col-span-1 sm:col-span-3">
            <DirectionAwareHover
              className="h-[224px] md:h-[274px] lg:h-[324px] xl:h-[374px]"
              imageUrl={rumahpohon}
            >
              <p className="font-bold text-xl">Rumah Pohon Gangga</p>
              <p className="font-normal text-sm">
                Tempat ini menyajikan spot foto di berbagai sudut lokasi dimana
                pengunjung dapat mengambil gambar dengan latar pemandangan alam
                yang indah. Terdapat juga panggung di tengah lokasi untuk
                atraksi seni, yoga, serta tempat berkumpul.
              </p>
            </DirectionAwareHover>
          </div>

          <div className="relative h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px] sm:col-span-2">
            <DirectionAwareHover
              className="h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]"
              imageUrl={tiupituq}
            >
              <p className="font-bold text-xl">Tiu Pituq</p>
              <p className="font-normal text-sm">
                Tiu pituq adalah satu dari destinasi wisata di lombok utara yg
                bisa di tempuh dalam satu atau setengah hari dari mataram, dan
                bangsal , dan pengunjung bisa menikmati alam dengan mengambil
                gambar alam dengan spot2 kekinian dan mandi di kolam alami dan
                air terjun , yang berbagai macam bentuknya.
              </p>
            </DirectionAwareHover>
          </div>

          <div className="relative h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]">
            <DirectionAwareHover
              className="h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]"
              imageUrl={terjun}
            >
              <p className="font-bold text-xl">Air Terjun Gangga</p>
              <p className="font-normal text-sm">
                Air Terjun Kerta Gangga memiliki keistimewaan yang tidak
                dimiliki air terjun lainnya. Keunikan air terjun ini ialah
                terdapat tiga air terjun yang alirannya sangat jernih. Kamu pun
                bisa menikmati ketiga air terjun ini sekaligus karena letaknya
                berdekatan.
              </p>
            </DirectionAwareHover>
          </div>

          <div className="relative h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]">
            <DirectionAwareHover
              className="h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]"
              imageUrl={tiupupus}
            >
              <p className="font-bold text-xl">Air Terjun Tiu Pupus</p>
              <p className="font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolorum distinctio modi asperiores, aspernatur architecto,
                similique cumque dolor obcaecati necessitatibus dolorem nihil
                est sequi accusantium, fugiat velit cum laudantium ratione?
              </p>
            </DirectionAwareHover>
          </div>

          <div className="relative h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px] sm:col-span-2">
            <DirectionAwareHover
              className="h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]"
              imageUrl={tiungumbak}
            >
              <p className="font-bold text-xl">Air Terjun Tiu Ngumbak</p>
              <p className="font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                adipisci animi qui commodi reiciendis optio, nesciunt a ullam
                corporis illo minus cumque in labore quisquam dolores quam,
                asperiores incidunt sed?
              </p>
            </DirectionAwareHover>
          </div>
          <div className="relative col-span-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]">
                <DirectionAwareHover
                  className="h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]"
                  imageUrl={petikcoklat}
                >
                  <p className="font-bold text-xl">Kampung Cokelat Senara</p>
                  <p className="font-normal text-sm">
                    Keberadaan Kampung Cokelat Senara ini cukup populer di
                    kalangan wisatawan. Baik itu wisatawan lokal hingga
                    mancanegara. Tiap hari, kunjungannya kisaran 50-100
                    wisatawan.
                  </p>
                </DirectionAwareHover>
              </div>

              <div className="relative h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]">
                <DirectionAwareHover
                  className="h-[224px] sm:h-[174px] md:h-[224px] lg:h-[274px] xl:h-[324px]"
                  imageUrl={museum}
                >
                  <p className="font-bold text-xl">Museum Desa Genggelang</p>
                  <p className="font-normal text-sm">
                    Pengunjung dapat melihat benda-benda bersejarah peninggalan
                    Kedatuan Gangga, serta mendengarkan sejarah tentang Kedatuan
                    Gangga dan kampung Besari yang Hilang.
                  </p>
                </DirectionAwareHover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
