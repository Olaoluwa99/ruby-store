import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useCart from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const cached = sessionStorage.getItem("products");
    if (cached) {
      const found = JSON.parse(cached).find((p) => p.id === Number(id));
      setProduct(found);
    } else {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then(setProduct);
    }
  }, [id]);

  if (!product)
    return (
      <p className="text-center text-lg text-[#725855] mt-10">Loading...</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#F9F2F1] rounded-xl shadow-lg mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-80 object-contain rounded-lg bg-white p-4 shadow"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-[#725855]">
              {product.title}
            </h1>
            <p className="text-[#503A37] mb-6">{product.description}</p>
            <p className="text-[#725855] font-bold text-2xl mb-6">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <label
              htmlFor="qty"
              className="text-[#725855] font-semibold text-lg min-w-[40px]"
            >
              Qty:
            </label>
            <input
              id="qty"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 p-2 border border-[#503A37] rounded text-[#503A37]"
            />
          </div>

          <button
            disabled={quantity < 1}
            onClick={() => {
              addToCart(product, quantity);
              alert(`${product.title} (x${quantity}) added to cart`);
            }}
            className={`w-full py-3 rounded-full font-semibold text-[#F6EFEE] transition ${
              quantity < 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#725855] hover:bg-[#5a453f]"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
