import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const categoryLinks = [
    "Chef Coats",
    "Aprons",
    "Chef Pants",
    "Caps",
    "Hospitality Uniforms",
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +92 XXX XXXXXXX
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> info@ccs.com
            </span>
          </div>

          <div className="flex gap-4">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/">
  <img
    src="/logo.png"
    alt="CCS Logo"
    className="w-40 object-contain"
  />
</Link>

          <div className="hidden md:flex gap-8 items-center">
            {mainLinks.map((link, index) => (
              <Link key={index} to={link.path} className="font-medium hover:text-red-500">
                {link.name}
              </Link>
            ))}

            <button style={{backgroundColor:"oklch(0.67 0.18 144.23)", borderColor:"transparent"}} className="text-white px-5 py-2 rounded">
              Get Quote
            </button>
          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Category Bar */}
        <div className="hidden md:flex justify-center gap-8 py-3 border-t text-sm font-medium">
          {categoryLinks.map((item, index) => (
            <button key={index} className="hover:text-red-500">
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
            {mainLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;