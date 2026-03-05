import React from "react";
import logo from "../../public/img39.jpg";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-cyan-900 text-white pt-16 pb-12 overflow-hidden">

      {/* Soft Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-800/30 via-cyan-900/10 to-cyan-900/20 pointer-events-none"></div>

      <div className="relative w-full mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4 max-w-sm">
            <img
              src={logo}
              alt="Shreya Water Tech LLP Logo"
              className="w-36 h-auto rounded-md object-contain"
            />
            <p className="text-white text-sm leading-relaxed">
              Advanced Industrial & Domestic RO Systems engineered for
              performance, reliability, and sustainable purification solutions.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full md:w-auto">

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3 text-white text-sm">
                <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="#products" className="hover:text-cyan-400 transition">Products</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>

            {/* Our Solutions */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Our Solutions</h4>
              <ul className="space-y-3 text-white text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition">Industrial RO Systems</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Domestic RO Systems</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Inline Filters</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">RO Spare Parts</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <ul className="space-y-3 text-white text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+919898406504" className="hover:text-cyan-400 transition">
                    +91 98984 06504
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:seapuremkt@gmail.com" className="hover:text-cyan-400 transition">
                    seapuremkt@gmail.com
                  </a>
                </li>

                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-cyan-400 transition leading-relaxed"
                  >
                    Plot No-1, Price Industrial, Kuha-Kothiya Road, Near Shreenath Weight Bridge, Kuha
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-cyan-800 text-white text-sm">

          <p>© {new Date().getFullYear()} Shreya Water Tech LLP. All Rights Reserved.</p>

          <div className="flex items-center gap-6">

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition"><Facebook size={18} /></a>
              <a href="#" className="hover:text-cyan-400 transition"><Instagram size={18} /></a>
              <a href="#" className="hover:text-cyan-400 transition"><Twitter size={18} /></a>
              <a href="#" className="hover:text-cyan-400 transition"><Linkedin size={18} /></a>
            </div>

            {/* Policies */}
            <div className="flex gap-4">
              <a href="/privacy-policy" className="hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-cyan-400 transition">Terms & Conditions</a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;