import { Link } from "react-router-dom";
import useCart from "../context/CartContext";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { products, loading } = useProducts();
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (loading)
    return (
      <p className="text-center text-lg text-[#1E1B1B]">Loading products...</p>
    );

  return (
    <div
      className="relative pb-20 
        bg-[#FFF8F7] 
        text-[#1E1B1B] 
        px-4 md:px-8"
    >
      <h1 className="text-2xl font-bold mb-6 mt-6">Explore</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <Link
        to="/cart"
        className="fixed bottom-4 right-4 z-50 
          bg-[#FFDFDA] 
          text-[#5C4541] 
          px-5 py-3 rounded-full shadow-lg 
          transition duration-300 hover:scale-105"
      >
        🛒 Cart ({totalItems})
      </Link>
    </div>
  );
};

export default Products;
