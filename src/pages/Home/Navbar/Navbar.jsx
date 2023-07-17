import { useState } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-12 w-12" src={logo} alt="Logo" />
              <span className="ml-2 text-primary font-semibold text-2xl md:text-3xl lg:text-5xl">
                House Hunter
              </span>
            </div>
          </div>
          <div className="-mr-2 flex items-center">
            <div className="hidden md:block">
              <div className="ml-4 flex items-baseline space-x-4">
                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                  Home
                </Link>
                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                  About
                </Link>
                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                  Login
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FaRegTimesCircle className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
