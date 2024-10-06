import { HoverEffect } from "../components/CardHover";
import { potensiDesa } from "../dataPotensi";

const Potensi: React.FC = () => {
  return (
    <section id="potensi-desa" className="w-full mt-32 mb-20 p-55 md:p-20 bg-black">
      <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white text-center mb-8 md:m-10">
        Potensi Desa
      </h2>
      <div className="text-white text-center max-w-4xl mx-auto mb-12">
        <p className="text-sm md:text-md px-10">
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
  );
};

export default Potensi;
