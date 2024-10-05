import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 5%; /* Ruang di atas */
  left: 50%;
  font-family: 'Poppins', sans-serif;
  transform: translateX(-50%);
  background: rgba(0, 10, 0, 0.5);
  padding: 8px 20px; 
  border-radius: 12px; 
  backdrop-filter: blur(5px); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  align-items: center;
  justify-content: center; /* Pusatkan konten */
  z-index: 10; 

  ul {
    list-style: none;
    display: flex;
    gap: 10px; /* Jarak antar item */
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 14px; /* Ukuran font lebih kecil untuk mobile */
    font-weight: 600; /* Bobot font */
    padding: 8px; /* Padding untuk area klik yang lebih kecil */
    transition: background 0.2s ease; /* Transisi untuk efek hover */

    &:hover {
      background: rgba(255, 255, 255, 0.1); /* Efek hover yang lebih baik */
      border-radius: 4px; /* Rounding pada hover */
    }
  }

  @media (max-width: 768px) { /* Media query untuk ukuran layar lebih kecil */
    top: 3%; /* Sesuaikan ruang di atas */
    padding: 4px 15px; /* Padding lebih kecil di mobile */
    font-size: 14px; /* Ukuran font lebih kecil di mobile */
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav className="">
      <ul>
        <li>
          <a href="#">Beranda</a>
        </li>
        <span className="text-black/[0.5]">|</span>
        <li>
          <a href="#potensi-desa">Profil</a>
        </li>
        <span className="text-black/[0.5]">|</span>
        <li>
          <a href="#services">Galeri</a>
        </li>
        <span className="text-black/[0.5]">|</span>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
