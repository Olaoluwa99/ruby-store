// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="font-medium text-sm mb-2 truncate">{product.title}</h3>
      <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="block bg-blue-600 text-white text-center py-1 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
