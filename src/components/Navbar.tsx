import React from "react";
import styled from "styled-components";


const Nav = styled.nav`
  position: absolute;
  top: 5%;
  left: 50%;
  font-family: "Poppins", sans-serif;
  transform: translateX(-50%);
  background: rgba(0, 10, 0, 0.5);
  padding: 10px 30px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  overflow: visible;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    padding: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
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

  /* Atur posisi dan jarak logo NTB */

  @media (max-width: 768px) {
    top: 3%;
    padding: 8px 15px;
    font-size: 14px;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
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
