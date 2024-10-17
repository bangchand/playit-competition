import { HoverEffect } from "../components/CardHover";
import { potensiDesa } from "../dataPotensi";

const Potensi: React.FC = () => {
  return (
    <section id="potensi-desa" className="w-full my-32">
      <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white text-center mb-3">
        Potensi Desa
      </h2>
      <div className="text-white max-w-4xl mx-auto mb-3 ">
        <p className="text-sm md:text-base text-center">
          Potensi daerah adalah kemampuan suatu daerah yang berupa sumber daya
          yang bisa digunakan, dieksploitasi, dan diambil manfaatnya untuk
          dikembangkan secara lebih lanjut sehingga bisa meningkatkan dan
          menciptakan kemampuan wilayah yang memadai.
        </p>
      </div>
      <div>
        <HoverEffect items={potensiDesa} />
      </div>
    </section>
  );
};

export default Potensi;
