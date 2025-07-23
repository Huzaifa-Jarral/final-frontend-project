import React from 'react'
import  logo  from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="text-gray-400 bg-[#0d1321] body-font">
      <div className="container px-5 py-10 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        {/* Logo & Bio */}
        <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src= {logo} alt="logo"
              className="w-12 h-12 rounded-full object-cover mr-2 hover:scale-110 transform transition-transform duration-300"
            />
            <span className="text-lg font-bold">CodeCraft By Huzaifa</span>
          </a>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            I turn ideas into interactive websites with <br />
            clean code, sleek design, and <br />
            performance in mind.
          </p>
        </div>

        {/* Info Columns */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          
          {/* My Info */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">MY INFO</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-400 hover:text-teal-400 transition-colors duration-300">About</a></li>
              <li><a className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Services</a></li>
              <li><a className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Contact</a></li>
            </nav>
          </div>

          {/* My Skills */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">MY SKILLS</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-400">FrontEnd Developer</a></li>
              <li><a className="text-gray-400">Graphics Designer</a></li>
              <li><a className="text-gray-400">Windows Installation</a></li>
              <li><a className="text-gray-400">Ms Office</a></li>
            </nav>
          </div>

          {/* Categories */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-400 hover:text-teal-400">First Link</a></li>
              <li><a className="text-gray-400 hover:text-teal-400">Second Link</a></li>
              <li><a className="text-gray-400 hover:text-teal-400">Third Link</a></li>
              <li><a className="text-gray-400 hover:text-teal-400">Fourth Link</a></li>
            </nav>
          </div>

          {/* Categories 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className="text-gray-400 hover:text-teal-400">First Link</a></li>
              <li><a className="text-gray-400 hover:text-teal-400">Second Link</a></li>
              <li><a className="text-gray-400 hover:text-teal-400">Third Link</a></li>
              <li><a className="text-gray-400 hover:text-teal-400">Fourth Link</a></li>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#1c2331] py-4">
        <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <p className="text-sm text-gray-400">
            © CodeCraft By Huzaifa — <span className="text-white">@HuzaifaKhawar</span>
          </p>
         <span className="inline-flex mt-2 sm:mt-0 space-x-4 text-gray-400">
  <a href="#" className="hover:text-teal-400 text-xl">
    <FaFacebookF />
  </a>
  <a href="#" className="hover:text-teal-400 text-xl">
    <FaTwitter />
  </a>
  <a href="#" className="hover:text-teal-400 text-xl">
    <FaInstagram />
  </a>
  <a href="#" className="hover:text-teal-400 text-xl">
    <FaLinkedinIn />
  </a>
</span>

        </div>
      </div>
    </footer>

  )
}

export default Footer
