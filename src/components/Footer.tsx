import { Link, useLocation} from "react-router-dom";
import styled from "styled-components";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const Nav = styled.nav`
  a {
    &.active {
    color: #16a34a; /* Warna saat aktif */
    }
  };
  `;

  return (
    <> 
      <footer className="relative mt-20 bg-neutral-900 px-4 pt-10">
         <div className="absolute -top-10 left-[52%] h-16 w-16 -translate-x-1/2 rounded-full bg-neutral-900 p-2">
          <img
            className="h-full object-contain"
            src="logogenggelang.png"
            alt=""
          />
        </div>
        <div className="absolute -top-10 left-[47%] h-16 w-16 -translate-x-1/2 rounded-full bg-neutral-900 px-5 py-3 p-2">
          <img
            className="h-full object-contain"
            src="logontb.svg"
            alt=""
          />
        </div>
        <Nav
          aria-label="Footer Navigation"
          className="mx-auto justify-center mb-5 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Beranda
          </Link>
          <Link to="/profile" className="font-medium text-white">
            Profil
          </Link>
          <Link to="/gallery" className="font-medium text-white">
            Galeri
          </Link>
          <Link to="/contact" className="font-medium text-white">
            Contact
          </Link>
        </Nav>
        <p className="py-5 text-center text-gray-300">
          © { currentYear }. Desa Genggelang. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
