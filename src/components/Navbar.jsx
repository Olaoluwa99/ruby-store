import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-[#FFF8F7] text-[#1E1B1B] shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#725855]">
          🛒 MyStore
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#5C4541]">
            Home
          </Link>
          <Link to="/products" className="hover:text-[#5C4541]">
            Products
          </Link>
          <Link to="/cart" className="hover:text-[#5C4541]">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-[#5C4541]">
            Checkout
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-[#1E1B1B]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-[#FFF8F7] shadow">
          <Link
            to="/"
            className="block py-2 hover:text-[#5C4541]"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block py-2 hover:text-[#5C4541]"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block py-2 hover:text-[#5C4541]"
            onClick={toggleMenu}
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="block py-2 hover:text-[#5C4541]"
            onClick={toggleMenu}
          >
            Checkout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
