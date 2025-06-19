import { useNavigate } from "react-router-dom";
import useCart from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    clearCart(); // ✅ Clears state + localStorage
    alert("✅ Checkout successful!");
    navigate("/"); // ✅ Redirect to homepage
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <ul className="mb-4">
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} x {item.quantity}
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Complete Checkout
      </button>
    </div>
  );
};

export default Checkout;
