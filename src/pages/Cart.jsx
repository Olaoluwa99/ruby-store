import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import useScreenshot from "../hooks/useScreenshot";
import useVoiceCommand from "../hooks/useVoiceCommand";

const Cart = () => {
  const { takeScreenshot } = useScreenshot();

  useVoiceCommand(takeScreenshot);

  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Your cart is empty 🛒</h2>
        <Link to="/" className="text-blue-600 underline">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div id="screenshot-area">
        <div>
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded shadow justify-between"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  crossOrigin="anonymous"
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price} each</p>
                  <div className="flex items-center gap-2 mt-2">
                    <label className="text-sm">Qty:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="w-16 p-1 border rounded"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>

      <div className="text-right mt-4">
        <button
          onClick={() => takeScreenshot()}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          📸 Take Screenshot
        </button>
      </div>
    </>
  );
};

export default Cart;
