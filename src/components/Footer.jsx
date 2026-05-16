import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <img
    src="/logo.png"
    alt="CCS Logo"
    className="w-52 object-contain"
  />

          <p className="text-gray-400">
            Premium chef and hospitality uniform solutions
            crafted with quality and professionalism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Categories
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Chef Coats</li>
            <li>Aprons</li>
            <li>Chef Pants</li>
            <li>Caps</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact Info
          </h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>+92 XXX XXXXXXX</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>info@ccs.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <p>Lahore, Pakistan</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        <p>
          © 2026 CCS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;