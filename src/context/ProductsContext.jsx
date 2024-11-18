import { useState, useEffect, useContext, createContext } from "react";

import api from "../services/config.js";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductsContext);
  const result = products.find(item => item.id === id);
  return result;
}

export default ProductsProvider;

export { useProducts, useProductDetails };

