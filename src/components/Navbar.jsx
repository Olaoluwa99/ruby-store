// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          🛒 MyStore
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="/cart" className="hover:text-blue-600">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
