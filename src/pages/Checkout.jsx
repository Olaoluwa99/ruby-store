/*import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const Checkout = () => {
  const { cart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    localStorage.removeItem("cart");
    updateQuantity(0); // Clear state
    alert("✅ Order placed! Thank you for shopping.");
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Nothing to checkout 🛍️</h2>
        <p className="text-gray-600 mt-2">Add some items to your cart first!</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="text-gray-700 mb-4">You're almost done!</p>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h2>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;*/

import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Simulate successful checkout
    clearCart(); // Clears both localStorage and state
    alert("✅ Checkout successful!");

    navigate("/"); // Optional: redirect to home
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Summary */}
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
