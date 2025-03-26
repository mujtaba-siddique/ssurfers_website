import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo2 from "../assets/logo.svg"; // Import the same logo as in footer

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  const handleNavigation = (path) => {
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    updateCartCount();
    
    const handleStorageChange = () => updateCartCount();
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <>
      {/* Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
              </button>
              
              <Link 
                to="/" 
                onClick={() => handleNavigation("/")}
                className="flex items-center ml-2 md:ml-0"
              >
                <img src={Logo2} alt="SurfHub Logo" className="h-8 w-auto" />
                
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/");
                }}
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium border-b-2 ${
                    isActive ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"
                  }`
                }
              >
                Home
              </NavLink>
              
              <div className="relative group">
                <button className="flex items-center px-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300">
                  Products
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <NavLink 
                    to="/surfboards" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/surfboards");
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surfboards
                  </NavLink>
                  
                </div>
              </div>
              
              <NavLink 
                to="/blog" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/blog");
                }}
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium border-b-2 ${
                    isActive ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"
                  }`
                }
              >
                Blog
              </NavLink>
              
              <NavLink 
                to="/about" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/about");
                }}
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium border-b-2 ${
                    isActive ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"
                  }`
                }
              >
                About
              </NavLink>
              
              <NavLink 
                to="/contact" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/contact");
                }}
                className={({ isActive }) => 
                  `px-1 py-2 text-sm font-medium border-b-2 ${
                    isActive ? "border-blue-500 text-blue-600" 
                    : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                to="/cart" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/cart");
                }}
                className="p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 relative"
              >
                <FiShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button
              onClick={() => handleNavigation("/")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Home
            </button>
            
            <div className="px-3 py-2">
              <button 
                className="w-full flex justify-between items-center text-gray-700 hover:text-gray-900"
                onClick={() => document.querySelector('.mobile-products-submenu').classList.toggle('hidden')}
              >
                <span className="text-base font-medium">Products</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="mobile-products-submenu hidden pl-4 space-y-1 mt-2">
                <button
                  onClick={() => handleNavigation("/surfboards")}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  Surfboards
                </button>
                <button
                  onClick={() => handleNavigation("/wetsuits")}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  Wetsuits
                </button>
                <button
                  onClick={() => handleNavigation("/accessories")}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  Accessories
                </button>
              </div>
            </div>
            
            <button
              onClick={() => handleNavigation("/blog")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Blog
            </button>
            
            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              About
            </button>
            
            <button
              onClick={() => handleNavigation("/contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;