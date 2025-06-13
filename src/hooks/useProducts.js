import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem("products");
    if (cached) {
      setProducts(JSON.parse(cached));
      setLoading(false);
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          sessionStorage.setItem("products", JSON.stringify(data));
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return { products, loading };
};

export default useProducts;
