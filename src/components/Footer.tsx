import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface footerType {
  className?: string;
}
const Footer = ({ className }: footerType) => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const Nav = styled.nav`
    a {
      &.active {
        color: #16a34a; /* Warna saat aktif */
      }
    }
  `;

  return (
    <>
      <footer
        className={`relative ${className} bg-neutral-900 px-6 pt-6 sm:pt-10`}
      >
        <div className="w-full h-11 absolute left-0 -top-6 flex justify-center items-center">
          <div className="h-full bg-neutral-900 rounded-lg">
            <img
              className="h-full object-contain"
              src="logogenggelang.png"
              alt=""
            />
          </div>
        </div>
        <Nav
          aria-label="Footer Navigation"
          className="mx-auto justify-center flex max-w-lg flex-col gap-6 sm:gap-10 text-center sm:flex-row sm:text-left"
        >
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : "text-white"}
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : "text-white"}
          >
            Profil
          </Link>
          <Link
            to="/gallery"
            className={
              location.pathname === "/gallery" ? "active" : "text-white"
            }
          >
            Galeri
          </Link>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "active" : "text-white"
            }
          >
            Contact
          </Link>
        </Nav>
        <p className="pb-2 pt-4 text-center text-[rgba(255,255,255,0.5)] text-sm">
          © {currentYear}. Desa Genggelang. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
