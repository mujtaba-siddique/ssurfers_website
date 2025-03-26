import React from "react";
import { FiFacebook } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";

function Info() {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Contact Information */}
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <a 
            href="tel:+917678990987" 
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center"
          >
            <span className="hidden sm:inline mr-1">📞</span>
            7678990987
          </a>
          <span className="text-gray-300">|</span>
          <a 
            href="mailto:contact@email.com" 
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center"
          >
            <span className="hidden sm:inline mr-1">✉️</span>
            contact@email.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <FiFacebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.youtube.com/"
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="YouTube"
          >
            <TfiYoutube className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <FaSquareInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://in.pinterest.com/"
            className="text-gray-600 hover:text-red-700 transition-colors"
            aria-label="Pinterest"
          >
            <FaPinterest className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/"
            className="text-gray-600 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <LuTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://in.linkedin.com/"
            className="text-gray-600 hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;