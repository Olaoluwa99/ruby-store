import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* 📸 Responsive Background Image */}
      <img
        src="https://i.postimg.cc/PJBCWvh5/2149321833.jpg"
        alt="Hero"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="https://i.postimg.cc/PJBCWvh5/214fn321833.jpg"
        alt="Hero Mobile"
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* 🧾 Card Content */}
      <div className="absolute inset-0 flex items-end md:items-end justify-center md:justify-start p-6 md:p-10">
        <div className="bg-white/80 text-[#1E1B1B] backdrop-blur-md rounded-2xl shadow-xl max-w-md w-full p-6 md:p-8 mb-6 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Welcome to ShopWise
          </h1>
          <p className="text-base md:text-xl mb-6">
            Discover top products and unbeatable deals.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#FFDFDA] text-[#5C4541] px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            Start Shopping 🛍
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
