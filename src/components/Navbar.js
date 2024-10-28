import React, { useState } from 'react';
import eyeImg from '../assests/eye.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navEleDesign = 'px-2 py-2 rounded-lg hover:bg-yellow';

  return (
    <div className="fixed top-0 left-0 w-full px-4 md:px-24 py-6 md:py-9 bg-white shadow-navbar flex justify-between items-center z-10">
      
      {/* Logo Image */}
      <img className="h-12 w-40 md:h-20 md:w-42" src={eyeImg} alt="Eye Logo" />

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className={`w-8 h-8 text-gray-800 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex space-x-0 space-y-2 md:space-y-0 md:space-x-4 font-medium absolute md:relative bg-white md:bg-transparent top-0 left-0 w-full md:w-auto p-4 md:p-0 ${isOpen ? 'flex' : 'hidden md:flex'}`}
      >
        <li className={navEleDesign}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={navEleDesign}>
          <Link to="/projects" onClick={closeMenu}>Events</Link>
        </li>
        <li className={navEleDesign}>
          <Link to="/recommendation" onClick={closeMenu}>Recommendations</Link>
        </li>
        <li className={navEleDesign}>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
