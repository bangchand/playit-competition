import React from "react";
import styled from "styled-components";


const Nav = styled.nav`
  position: absolute;
  top: 2%;
  left: 50%;
   font-family: 'Poppins', sans-serif;
  transform: translateX(-50%);
  background: rgba(0, 10, 0, 0.5);
  padding: 10px 30px;
  border-radius: 12px; 
  backdrop-filter: blur(5px); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; 

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: semibold;
  }

  @media (max-width: 48em) {
    padding: 8px 20px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
