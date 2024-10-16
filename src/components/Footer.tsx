import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="w-full bg-neutral-950 text-white">
        <div className="container py-10 flex justify-between">
          <ul className=" flex flex-col gap-2 uppercase">
            <li className="text-xl font-semibold px-3">
              <Link to="/">Beranda</Link>
            </li>
            <li className="text-xl font-semibold px-3">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="text-xl font-semibold px-3">
              <Link to="/gallery">Galeri</Link>
            </li>
            <li className="text-xl font-semibold px-3">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="">
            <h1 className="mb-3">Created by: Bunner Code</h1>
          </div>
        </div>
        <div className="text-center py-2">
          © {currentYear}. Desa Genggelang. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
