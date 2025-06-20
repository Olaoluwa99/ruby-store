import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
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

      <div className="absolute inset-0 flex items-end justify-center md:justify-start p-6 md:p-10">
        {/* Main Box */}
        <div className="bg-white/80 text-[#1E1B1B] backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 mb-6 md:mb-10 flex flex-col space-y-3">
          {/* This div will set the max width */}
          <div className="inline-block">
            <h1 className="text-3xl md:text-5xl font-bold">
              Welcome to Ruby Store
            </h1>

            <p className="text-base md:text-xl mt-3">
              Explore top fashion, electronics, and jewelry. Quality products at
              unbeatable prices, all in one place
            </p>

            <Link
              to="/products"
              className="mt-4 inline-block bg-[#725855] text-white rounded-full text-lg font-medium hover:opacity-90 transition text-center"
              style={{
                padding: "12px 24px",
              }}
            >
              Start Shopping 🛍
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
