"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-30 bg-white text-black p-5 shadow-sm transition-all duration-300 ease-in-out">
      <nav className="container mx-auto px-10 flex items-center justify-evenly">
        {/* Left Links */}
        <div className="hidden lg:flex space-x-10">
          <Link
            href="#products"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Products
          </Link>
          {/* <Link
            href="#services"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Services
          </Link> */}
          <Link
            href="#about"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            About Us
          </Link>
        </div>

        {/* Brand in the center */}
        <Link
          href="#"
          className="text-2xl font-bold transition-transform duration-300 hover:scale-105"
        >
          Dapur Indah
        </Link>

        {/* Right Links */}
        <div className="hidden lg:flex space-x-10">
          <Link
            href="#testimonials"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Testimonials
          </Link>
          {/* <Link
            href="#blog"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Blog
          </Link> */}
          <Link
            href="#contact"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden ml-auto">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Links */}
      <ul
        className={`flex-col lg:hidden space-y-5 p-5 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <Link
            href="#products"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#testimonials"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="#blog"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="transition-transform duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
