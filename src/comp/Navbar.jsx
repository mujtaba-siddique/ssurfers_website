import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom"; 

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isProductDropdownVisible, setIsProductDropdownVisible] =
    useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownVisible(!isProductDropdownVisible);
  };

  const handleLinkClick = () => {
    setIsDropdownVisible(false);
  };

  const handleProductSelect = () => {
    setIsProductDropdownVisible(false);
  };

  return (
    <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md">
      
      <div className="navbar-start">
        <div className="dropdown dropdown-bottom md:hidden mr-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={toggleDropdown}
          >
            <MdMenu className="text-6xl font-bold text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer" />
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-black text-white rounded-box mb-3 w-36 shadow-xl border-opacity-60 ${
              isDropdownVisible ? "block" : "hidden"
            } z-40`}
          >
            <li>
              <Link
                to="/"
                className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left p-2 hover:bg-gray-700"
                onClick={toggleProductDropdown}
              >
                Products
              </button>
              <ul
                className={`p-2 ${isProductDropdownVisible ? "block" : "hidden"} `}
                
              >
                <li>
                  <Link
                    to="/surfboards"
                    className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
                    onClick={handleProductSelect}
                  >
                    Surfboards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bagpack"
                    className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
                    onClick={handleProductSelect}
                  >
                    Backpacks
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 mt-2">
              <Link
                to="/blog"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 mt-2">
              <Link
                to="/about"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 mt-2">
              <Link
                to="/contact"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="md:mx-[5rem]">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
          />
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300">
            <Link to="/">Home</Link>
          </li>

          <li className="relative">
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
              onClick={toggleProductDropdown}
            >
              Products
            </button>
            <ul
              className={`${
                isProductDropdownVisible ? "block" : "hidden"
              } p-2 absolute left-0  bg-black text-white rounded-md shadow-lg w-40 transition-all transform duration-300 ease-out mt-14`}
            >
              <li>
                <Link
                  to="/surfboards"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
                  onClick={handleProductSelect}
                >
                  Surfboards
                </Link>
              </li>
              <li>
                <Link
                  to="/bagpack"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
                  onClick={handleProductSelect}
                >
                  Backpacks
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/blog"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <span className="navbar-end">
        <Link to="/cart">
          <FaCartShopping className="text-2xl md:opacity-50 md:hover:opacity-100 cursor-pointer mr-8 md:mr-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300" />
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
