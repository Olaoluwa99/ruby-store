import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 sticky top-0 z-50 text-gray-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          🛒 MyStore
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-300">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-blue-600 dark:hover:text-blue-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-600 dark:hover:text-blue-300"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="hover:text-blue-600 dark:hover:text-blue-300"
          >
            Checkout
          </Link>
          {/* 🌗 Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 text-xl hover:text-yellow-500"
            title="Toggle Dark Mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-700 dark:text-white"
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
        <div className="md:hidden px-4 pt-2 pb-4 bg-white dark:bg-gray-800 shadow">
          <Link
            to="/"
            className="block py-2 hover:text-blue-600 dark:hover:text-blue-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block py-2 hover:text-blue-600 dark:hover:text-blue-300"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block py-2 hover:text-blue-600 dark:hover:text-blue-300"
            onClick={toggleMenu}
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="block py-2 hover:text-blue-600 dark:hover:text-blue-300"
            onClick={toggleMenu}
          >
            Checkout
          </Link>
          <button
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
            className="block w-full text-left py-2 mt-2 text-xl"
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
