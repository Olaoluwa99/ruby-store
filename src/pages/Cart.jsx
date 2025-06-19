import { Link } from "react-router-dom";
import useCart from "../context/CartContext";
import useScreenshot from "../hooks/useScreenshot";
import useVoiceCommand from "../hooks/useVoiceCommand";

const Cart = () => {
  const { takeScreenshot } = useScreenshot();
  useVoiceCommand(takeScreenshot);

  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20 px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-4 text-[#1E1B1B]">
          Your cart is empty 🛒
        </h2>
        <Link
          to="/"
          className="text-[theme(colors.primaryLight)] underline font-medium"
        >
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 pb-20">
      <div id="screenshot-area">
        <h1 className="text-3xl font-bold mb-8 mt-6 text-[theme(colors.onBackgroundLight)]">
          Cart
        </h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between 
                         bg-[#F9F2F1] text-[#1E1B1B] p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  crossOrigin="anonymous"
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price} each</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:gap-4 w-full md:w-auto mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="w-16 p-1 border border-gray-300 rounded-md text-sm"
                  />
                </div>

                <p className="font-bold mt-2 md:mt-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-2 md:mt-0 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-right">
        <h2 className="text-2xl font-bold text-[#1E1B1B]">
          Total: ${total.toFixed(2)}
        </h2>
        <Link
          to="/checkout"
          className="inline-block mt-4 bg-[#725855] text-[#F6EFEE] px-6 py-3 rounded-full font-semibold hover:bg-[#5a453f] transition"
        >
          Proceed to Checkout
        </Link>
      </div>
      // ...
      <div className="text-right mt-10">
        <button
          onClick={takeScreenshot}
          className="bg-[#F9F2F1] text-[#1E1B1B] px-6 py-3 rounded-full hover:bg-[#5a453f] transition shadow-sm"
        >
          📸 Take Screenshot
        </button>
      </div>
    </div>
  );
};

export default Cart;
