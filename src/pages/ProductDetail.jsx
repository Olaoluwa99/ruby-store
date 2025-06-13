import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useCart from "../hooks/useCart";

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

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-contain"
        />
        <div>
          <h1 className="text-xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-blue-600 font-bold text-lg mb-4">
            ${product.price}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <label htmlFor="qty" className="text-sm font-medium">
              Qty:
            </label>
            <input
              id="qty"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 p-1 border rounded"
            />
          </div>

          <button
            disabled={quantity < 1}
            onClick={() => {
              addToCart(product, quantity);
              alert(`${product.title} (x${quantity}) added to cart ✅`);
            }}
            className={`px-4 py-2 rounded text-white ${
              quantity < 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
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
