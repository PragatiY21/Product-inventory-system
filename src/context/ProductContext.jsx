import { createContext, useContext, useState } from "react";
import productsData from "../data/products.json";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  // ➕ Add product
  const addProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: Date.now() }
    ]);
  };

  // ✏️ Edit product
  const updateProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, ...updatedData } : p
      )
    );
  };

  // ❌ Delete product
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
