import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Nav = styled.nav<{ isSticky: boolean }>`
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ isSticky }) =>
    isSticky ? "rgba(30, 30, 30, 0.8)" : "rgba(0, 10, 0, 0.5)"};
  padding: 10px 30px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  box-shadow: ${({ isSticky }) =>
    isSticky
      ? "0 4px 10px rgba(0, 0, 0, 0.3)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  ul {
    display: flex;
    gap: 10px;
  }

  a {
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    padding: 8px;
    transition: color 0.2s ease;

    /* Gaya underline untuk layar besar */
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0;
      height: 2px;
      background-color: white;
      transition: width 0.4s ease;
    }

    &:hover::after,
    &:hover ~ a::after {
      width: 100%;
    }

    &.active {
      color: #16a34a; /* Warna saat aktif */
      font-weight: bold;
      &::after {
        width: 100%; /* Garis bawah penuh untuk link aktif */
        background-color: #16a34a;
      }
    }
  }

  /* Atur posisi dan jarak logo Genggelang */
  #genggelang {
    position: absolute;
    top: 50%;
    left: -600px; /* Jarak antara logo dan navbar */
    transform: translateY(-50%);
    max-width: 100px;
    height: auto;
  }

  /* Gaya khusus untuk mobile */
  @media (max-width: 768px) {
    top: 3%;
    margin: 0 0 5px 4px;
    padding: 8px 15px;
    font-size: 14px;

    a {
      border-bottom: 2px solid transparent; /* Menggunakan border-bottom untuk underline di mobile */
    }

    a.active {
      border-bottom: 2px solid white; /* Underline tetap saat link aktif */
      border-color: #16a34a
    }

    a::after {
      content: none; /* Nonaktifkan animasi underline di mobile */
    }
  }
`;


const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Mengambil URL path saat ini

  useEffect(() => {
    const handleScroll = () => {
      const sectionTwo = document.getElementById("section-two");
      const sectionTwoTop = sectionTwo?.offsetTop || 0;

      if (window.scrollY >= sectionTwoTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav isSticky={isSticky}>
      <ul>
        <li>
          <a href="/" className={location.pathname === "/" ? "active" : ""}>
            Beranda
          </a>
        </li>
        <span className="text-black/[0.5]">|</span>
        <li>
          <a
            href="/potensi-desa"
            className={location.pathname === "/potensi-desa" ? "active" : ""}
          >
            Profil
          </a>
        </li>
        <span className="text-black/[0.5]">|</span>
        <li>
          <a
            href="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Galeri
          </a>
        </li>
        <span className="text-black/[0.5]">|</span>
        <li>
          <a
            href="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
