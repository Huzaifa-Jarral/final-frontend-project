import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, Links } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-indigo-900 to-orange-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <a className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="ml-3 text-2xl text-blue-50 font-medium">
            CodeCraft By Huzaifa
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center text-xl space-x-6">
          <Link to="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
          <Link to="/about"className="hover:text-gray-300 cursor-pointer">About</Link>
          <Link to="/services"className="hover:text-gray-300 cursor-pointer">Services</Link>
          <Link to="/contact"className="hover:text-gray-300 cursor-pointer">Contact</Link>
          <button className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-orange-600 text-white hover:from-indigo-900 hover:to-orange-900 font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Message
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </nav>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-5 pb-4 space-y-3 bg-gradient-to-r from-gray-900 via-indigo-900 to-orange-900">
          <a className="block hover:text-gray-300 cursor-pointer">About</a>
          <a className="block hover:text-gray-300 cursor-pointer">Services</a>
          <a className="block hover:text-gray-300 cursor-pointer">Contact</a>
          <button className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-orange-600 hover:from-indigo-900 hover:to-orange-900 font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Message
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
