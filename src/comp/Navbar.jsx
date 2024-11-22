import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isProductDropdownVisible, setIsProductDropdownVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Added for mobile dropdown
  const [cartItemCount, setCartItemCount] = useState(0);
  const [timer, setTimer] = useState(null); // To store the timeout reference
  const location = useLocation();

  useEffect(() => {
    // Fetch cart items from localStorage and calculate the total count
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemCount = storedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(itemCount);
  }, []);

  // Handle mouse entering the "Products" section
  const handleMouseEnterProduct = () => {
    // Clear any existing timer if the mouse re-enters
    clearTimeout(timer);
    setIsProductDropdownVisible(true);
  };

  // Handle mouse leaving the "Products" section
  const handleMouseLeaveProduct = () => {
    // Set a timeout to close the dropdown after 2 seconds
    const newTimer = setTimeout(() => {
      setIsProductDropdownVisible(false);
    }, 2000); // 2 seconds
    setTimer(newTimer);
  };

  const handleProductSelect = () => {
    // Close dropdown immediately when a product is selected
    setIsProductDropdownVisible(false);
  };

  // Toggle visibility for mobile dropdown
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Close mobile dropdown when a link is clicked
  const handleLinkClick = () => {
    setIsDropdownVisible(false);
  };

  const isCartPage = location.pathname === "/cart";

  return (
    <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-bottom md:hidden mr-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={toggleDropdown}
          >
            <MdMenu className="text-6xl font-bold text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer" />
          </div>
          {/* Mobile Dropdown Menu */}
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
                onClick={() => setIsProductDropdownVisible(!isProductDropdownVisible)}
              >
                Products
              </button>
              <ul
                className={`p-2 ${isProductDropdownVisible ? "block" : "hidden"}`}
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

        {/* Logo */}
        <Link to="/" className="md:mx-[5rem]">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li
            className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 ${isCartPage ? "text-green-500" : ""}`}
          >
            <Link to="/">Home</Link>
          </li>

          <li
            className="relative"
            onMouseEnter={handleMouseEnterProduct} // Mouse enter event
            onMouseLeave={handleMouseLeaveProduct} // Mouse leave event
          >
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
            >
              Products
            </button>
            {/* Desktop Dropdown Menu */}
            <ul
              className={`${
                isProductDropdownVisible ? "block" : "hidden"
              } p-2 absolute left-0 bg-white text-black rounded-md shadow-lg w-40 transition-all transform duration-300 ease-out mt-14`}
            >
              <li>
                <Link
                  to="/surfboards"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
                  onClick={handleProductSelect} // Close dropdown on select
                >
                  Surfboards
                </Link>
              </li>
              <li>
                <Link
                  to="/bagpack"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
                  onClick={handleProductSelect} // Close dropdown on select
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

      {/* Cart Icon */}
      <span className="navbar-end">
        <Link to="/cart" className="relative">
          <FaCartShopping className="text-2xl md:opacity-50 md:hover:opacity-100 cursor-pointer mr-8 md:mr-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300" />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-2 py-1">
              {cartItemCount}
            </span>
          )}
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
