import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/main.png';
import '@fortawesome/fontawesome-free/css/all.css';
import '../assets/css/header.css';

const Header = () => {
  return (
    <header className="text-black w-full shadow-md">
      <div className="bg-gray-800 max-w-full px-4 py-2 mx-auto flex flex-col md:flex-row justify-end items-center text-white">
        <div className="flex flex-col text-right space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Email */}
          <div className="flex items-center space-x-2 group">
            <i className="fas fa-envelope text-white text-yellow-400"></i>
            <a href="mailto:info@maggiesmagictouch.com" className="text-base font-bold text-white group-hover:text-yellow-400">
              info@maggiesmagictouch.com
            </a>
          </div>
          {/* Address */}
          <div className="flex items-center space-x-2 group">
            <i className="fas fa-map-marker-alt text-yellow-400"></i>
            <a href="https://www.google.com/maps?q=2335+Fairway+Rd,+Huntingdon+Valley,+PA+19006,+USA" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white group-hover:text-yellow-400">
              2335 Fairway Rd, Huntingdon Valley, PA 19006, USA
            </a>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-2 group">
            <i className="fas fa-phone-alt text-yellow-400"></i>
            <a href="tel:+12675977272" className="text-base font-bold text-white group-hover:text-yellow-400">
              +1-267-597-7272
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 relative overflow-hidden">
        <div className="max-w-full px-4 mx-auto flex flex-col md:flex-row items-center">
          <div className="flex flex-col mb-4 md:mb-0">
            <img src={logo} alt="Maggie's Magic Touch Logo" className="w-1/2 h-auto md:w-1/3" />
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/" className="text-black hover:text-white-400 text-lg">HOME</Link>
            <Link to="/services" className="text-black hover:text-white-400 text-lg">SERVICES</Link>
            <Link to="/videos" className="text-black hover:text-white-400 text-lg">VIDEOS</Link>
            <Link to="/about" className="text-black hover:text-white-400 text-lg">ABOUT US</Link>
            <Link to="/contact" className="text-black hover:text-white-400 text-lg">CONTACT</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
