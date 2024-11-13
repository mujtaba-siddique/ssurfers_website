import React from "react";
import Logo2 from "../assets/logo2.svg";
import { FiFacebook } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src={Logo2} alt="Logo2" />

            <p className="mt-4 text-center text-lg">
              Ssurfers Pvt Ltd.
              <br />
              Providing reliable products since 2022
            </p>
            <span className="flex space-x-4 md:mx-[5rem] sm:text-xl mt-8">
              <a
                href="https://www.facebook.com/"
                className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
              >
                <FiFacebook />
              </a>
              <a
                href="https://www.youtube.com/"
                className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
              >
                <TfiYoutube />
              </a>
              <a
                href="https://www.instagram.com/"
                className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
              >
                <FaSquareInstagram />
              </a>
              <a
                href="https://in.pinterest.com/"
                className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
              >
                <FaPinterest />
              </a>
              <a
                href="https://x.com/"
                className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
              >
                <LuTwitter />
              </a>
              <a
                href="https://in.linkedin.com/"
                className="cursor-pointer md:opacity-30 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110  duration-200 ..."
              >
                <IoLogoLinkedin />
              </a>
            </span>
          </div>

          <div className="flex flex-col items-center">
            <h6 className="text-xl font-semibold mb-2">Services</h6>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Branding
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Design
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Marketing
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Advertisement
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <h6 className="text-xl font-semibold mb-2">Company</h6>
            <Link
              to="/about"
              className="text-gray-400 hover:text-blue-500 mb-2"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-blue-500 mb-2"
            >
              Contact
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Jobs
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Press Kit
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <h6 className="text-xl font-semibold mb-2">Legal</h6>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Terms of Use
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-500 mb-2">
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Ssurfers Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
