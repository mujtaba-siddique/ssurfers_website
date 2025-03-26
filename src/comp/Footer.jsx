import React, { useState } from "react";
import Logo2 from "../assets/logo2.svg";
import { FiFacebook } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 1000); // 1 second delay
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      {/* Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-40 mb-6">
              <img src={Logo2} alt="Ssurfers Logo" className="w-full h-auto" />
            </div>
            <p className="text-gray-400 text-center md:text-left text-lg leading-relaxed mb-6">
              Ssurfers Pvt Ltd.
              <br />
              Providing premium surf gear since 2022
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-5">
              {[
                { icon: <FiFacebook size={20} />, url: "https://www.facebook.com/" },
                { icon: <TfiYoutube size={20} />, url: "https://www.youtube.com/" },
                { icon: <FaSquareInstagram size={20} />, url: "https://www.instagram.com/" },
                { icon: <FaPinterest size={20} />, url: "https://in.pinterest.com/" },
                { icon: <LuTwitter size={20} />, url: "https://x.com/" },
                { icon: <IoLogoLinkedin size={20} />, url: "https://in.linkedin.com/" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.url.split('//')[1].split('/')[0]}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="text-xl font-semibold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Navigation
            </h6>
            <div className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Blog", path: "/blog" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left w-full"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="text-xl font-semibold text-white mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Legal
            </h6>
            <div className="space-y-3">
              {[
                { name: "Terms of Use", action: () => alert("Terms of Use page will open") },
                { name: "Privacy Policy", action: () => alert("Privacy Policy page will open") },
                { name: "Cookie Policy", action: () => alert("Cookie Policy page will open") }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left w-full"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Ssurfers Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;