import { useNavigate } from "react-router-dom";
import useCart from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isInCart) {
      alert("Item already in cart");
    } else {
      addToCart(product, 1);
      alert("Item added to cart");
    }
  };

  const goToDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="cursor-pointer 
        bg-[#F9F2F1] 
        text-[#1E1B1B] 
        p-4 rounded-xl 
        shadow hover:shadow-lg 
        transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />

      <h3 className="font-medium text-sm mb-2 truncate">{product.title}</h3>

      <p className="text-[#725855] font-bold mb-3">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className="w-full 
          bg-[#FFDFDA] 
          text-[#5C4541] 
          py-2 rounded-full 
          font-medium 
          hover:opacity-90 
          transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
