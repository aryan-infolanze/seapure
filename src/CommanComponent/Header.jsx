import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/90 backdrop-blur-md shadow-md border-b border-blue-100">
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Shreya Water Tech LLP Logo"
            className="w-18 h-12 object-cover"
          />
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">
              Shreya Water Tech LLP
            </h1>
            <p className="text-xs text-blue-900 font-semibold tracking-wide">
              Industrial & Domestic RO Solutions
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-blue-900 font-bold uppercase">
          {/* Main Links */}
          <a
            href="#home"
            className="relative after:absolute after:bottom-0 after:right-0 after:h-1 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 p-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative after:absolute after:bottom-0 after:right-0 after:h-1 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 p-2"
          >
            About
          </a>
          <a
            href="#company"
            className="relative after:absolute after:bottom-0 after:right-0 after:h-1 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 p-2"
          >
            Company
          </a>
          <a
            href="#products"
            className="relative after:absolute after:bottom-0 after:right-0 after:h-1 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 p-2"
          >
            Products
          </a>
          {/* <a
    href="#contact"
    className="relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 p-2"
  >
    Contact
  </a> */}

          {/* Divider */}
          <div className="border-l border-gray-300 h-6 mx-4"></div>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-7">
            <a
              href="mailto:seapuremkt@gmail.com"
              className="hover:text-blue-500 transition"
            >
              <FaEnvelope size={18} />
            </a>
            <a href="tel:+98984 06504" className="hover:text-blue-500 transition">
              <FaPhoneAlt size={18} />
            </a>
            <a href="https://www.instagram.com/shreyawatertech?igsh=MXkxYThldTZpZXd1dQ==" target="_blank" className="hover:text-pink-500 transition">
              <FaInstagram size={18} />
            </a>
            {/* <a href="https://www.linkedin.com" target="_blank" className="hover:text-blue-700 transition">
      <FaLinkedin size={18} />
    </a> */}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition hover:scale-105"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-blue-800 text-2xl">☰</button>
        </div>

      </div>

      {/* Mobile Sidebar */}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-auto w-72 bg-white z-[999] transform transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full bg-white">

          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-200">
            <h2 className="text-blue-900 font-bold text-lg">
              Shreya Water Tech LLP
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-blue-800"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-5 p-6 text-blue-800 font-bold uppercase">
            <a href="#home" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
              Home
            </a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
              About
            </a>
            <a href="#company" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
              Company
            </a>
            <a href="#products" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
              Products
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
              Contact
            </a>
          </nav>

          {/* Divider */}
          <div className="border-t border-gray-200 mx-6"></div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4 p-6 text-blue-800">

            <a
              href="tel:+ 98984 06504"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <FaPhoneAlt />
              98984 06504
            </a>

            <a
              href="mailto: seapuremkt@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <FaEnvelope />
              seapuremkt@gmail.com
            </a>

            {/* <a
              href="https://www.instagram.com/shreyawatertech?igsh=MXkxYThldTZpZXd1dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-pink-500 transition"
            >
              <FaInstagram />
              Instagram
            </a> */}

          </div>

        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[998] md:hidden"
        />
      )}
    </header>
  );
}

export default Header;