// src/pages/Hero.jsx
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('https://source.unsplash.com/featured/?ecommerce,shopping')`,
      }}
    >
      <div className="bg-black/50 p-8 rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to ShopWise
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover top products and unbeatable deals
        </p>
        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Shopping 🛍
        </Link>
      </div>
    </div>
  );
};

export default Hero;
