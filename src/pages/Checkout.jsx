import { useNavigate } from "react-router-dom";
import useCart from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    clearCart();
    alert("Checkout successful. Thanks for buying!");
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#F9F2F1] rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-[#725855]">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-[#725855] text-lg font-medium">
          Your cart is empty. Please add some products before checking out.
        </p>
      ) : (
        <>
          <ul className="mb-6 space-y-4 max-h-96 overflow-auto">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <div>
                  <p className="font-semibold text-[#503A37]">{item.title}</p>
                  <p className="text-sm text-[#725855]">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-bold text-[#725855]">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-right mb-6">
            <p className="text-xl font-bold text-[#503A37]">
              Total: ${total.toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-[#725855] text-[#F6EFEE] py-3 rounded-full font-semibold text-lg hover:bg-[#5a453f] transition"
          >
            Complete Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
