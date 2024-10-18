// about.tsx
import { StickyScroll } from "../components/StickyScrollReveal"; // Import sesuai path kamu
import { AuroraBackground } from "../components/AuroraBackground"; // Import AuroraBackground
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Data timeline yang sudah diberikan
const timelineItems = [
  { 
    date: "Sejarah Desa Genggelang",
    title: "Lokasi",
    description:
      "Desa Genggelang terletak di Kabupaten Lombok Utara, Nusa Tenggara Barat, dan merupakan bagian dari Kecamatan Gangga.",
    imageUrl: "/path/to/img1.jpg", // Ganti dengan path gambar yang benar
  },
  {
    date: "Kehidupan Awal",
    title: "Kehidupan Awal",
    description:
      "Desa ini awalnya merupakan pemukiman kecil yang dihuni oleh masyarakat yang mengandalkan pertanian dan peternakan sebagai sumber kehidupan. Kegiatan agraris ini menjadi tulang punggung perekonomian desa dan menjadikan Genggelang pusat sosial dan ekonomi di sekitarnya.",
    imageUrl: "/path/to/img1.jpg", // Ganti dengan path gambar yang benar
  },
  {
    date: "Asal Usul Nama 'Genggelang'",
    title: "Asal Usul Nama 'Genggelang'",
    description:
      "Nama 'Genggelang' berasal dari cerita rakyat yang diwariskan secara lisan. Ada dua versi mengenai asal usul nama ini: Tanaman Hutan dan Bahasa Setempat.",
    imageUrl: "/path/to/img1.jpg", // Ganti dengan path gambar yang benar
  },
  {
    date: "Pembentukan Desa",
    title: "Pembentukan Desa",
    description:
      "Desa Genggelang secara resmi dibentuk pada awal abad ke-20, sekitar tahun 1920-an, sebagai bagian dari kebijakan pemerintahan kolonial Belanda untuk mengatur administrasi di Lombok.",
    imageUrl: "/path/to/img1.jpg", // Ganti dengan path gambar yang benar
  },
  {
    date: "Transformasi Pasca-Kemerdekaan",
    title: "Transformasi Pasca-Kemerdekaan",
    description:
      "Setelah kemerdekaan Indonesia, Desa Genggelang mengalami transformasi besar. Pada periode 1960-an hingga 1980-an, pembangunan infrastruktur, seperti jalan dan jembatan, mendukung pertumbuhan desa.",
    imageUrl: "/path/to/img1.jpg", // Ganti dengan path gambar yang benar
  },
  {
    date: "Jejak Berdirinya",
    title: "Jejak Berdirinya",
    description:
      "Berdirinya Desa Genggelang merupakan hasil perjuangan masyarakat lokal untuk memiliki identitas dan kedaulatan. Para sesepuh dan tokoh masyarakat berperan penting dalam mendorong pembentukan desa.",
    imageUrl: "/path/to/img1.jpg", // Ganti dengan path gambar yang benar
  },
  {
    date: "Perkembangan Terkini",
    title: "Perkembangan Terkini",
    description:
      "Desa Genggelang telah mengalami perkembangan pesat dalam infrastruktur dan ekonomi, termasuk kemudahan akses ke pasar dan layanan publik. Transformasi ini berdampak positif pada pariwisata dan UMKM lokal.",
    imageUrl: "/path/to/img1.jpg", // Ganti dengan path gambar yang benar
  },
];

const About = () => {
  return (
    <>
    <AuroraBackground className="lg:p-32 min-h-full">
      <Navbar />
      <h1 className="text-3xl font-bold mb-8 text-white">About Us</h1>
      <StickyScroll content={timelineItems} />
    </AuroraBackground>
      <Footer/>
    </>
  );
};

export default About;
