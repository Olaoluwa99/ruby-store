import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import useCart from "../hooks/useCart"; // Optional if you want to show item count

const Home = () => {
  const { products, loading } = useProducts();
  const { cart } = useCart(); // Optional
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Optional

  if (loading)
    return <p className="text-center text-lg">Loading products...</p>;

  return (
    <div className="relative pb-20">
      <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {/* 🛒 Floating Cart Button */}
      <Link
        to="/cart"
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition duration-300"
      >
        🛒 Cart ({totalItems})
      </Link>
    </div>
  );
};

export default Home;
