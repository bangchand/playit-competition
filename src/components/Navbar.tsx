import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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
  align-items: center;
  z-index: 999;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  ul {
    display: flex;
    gap: 20px;
  }

  /* Gaya untuk link navbar */
  a {
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    transition: color 0.2s ease;

    /* Animasi underline untuk link */
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

    &:hover::after {
      width: 100%;
    }

    &.active {
      color: #16a34a;
      font-weight: bold;

      &::after {
        width: 100%;
        background-color: #16a34a;
      }
    }
  }

  /* Gaya untuk span di dropdown tanpa animasi */
  .dropdown-wrapper > span {
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    cursor: pointer;
    position: relative;
    color: white;
    transition: color 0.2s ease;
  }

  /* Dropdown styling */
  .dropdown-wrapper {
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 150%; /* Tepat di bawah elemen "Contact" */
    right: -20%; /* Tidak ada pergeseran ke kanan */
    transform: translateY(10%); /* Pastikan tidak ada pergeseran vertikal */
    background: ${({ isSticky }) =>
      isSticky ? "rgba(30, 30, 30, 0.9)" : "rgba(0, 10, 0, 0.7)"};
    padding: 10px;
    border-radius: 8px;
    display: none;
    flex-direction: column;
    gap: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;

    a {
      padding: 8px 12px;
      color: white;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

  }

  .dropdown-wrapper {
    position: relative; /* Supaya dropdown mengikuti posisi "Contact" */
  }

  /* Menampilkan dropdown */
  .dropdown-wrapper:hover .dropdown {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

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
      border-color: #16a34a;
    }

    a::after {
      content: none; /* Nonaktifkan animasi underline di mobile */
    }
  }
`;

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sectionTwo = document.getElementById("section-two");
      const sectionTwoTop = sectionTwo?.offsetTop || 0;
      setIsSticky(window.scrollY >= sectionTwoTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav isSticky={isSticky}>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Beranda
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            Profil
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={location.pathname === "/gallery" ? "active" : ""}
          >
            Galeri
          </Link>
        </li>
        <li className="dropdown-wrapper">
          <span>Contact</span>
          <div className="dropdown">
            <Link to="https://instagram.com/genggelang_wisata">Instagram</Link>
            <Link to="/contact/phone">Twitter</Link>
            <Link to="/contact/address">Facebook</Link>
          </div>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
