import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";
import "./ProductTable.css";

const ProductTable = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProduct();
  const { user } = useAuth();

  // Add product state
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  // Edit state
  const [editId, setEditId] = useState(null);
  const [editQty, setEditQty] = useState("");

  // Add product
  const handleAdd = () => {
    if (!name || !price || !qty) return;

    addProduct({
      name,
      price: Number(price),
      quantity: Number(qty)
    });

    setName("");
    setPrice("");
    setQty("");
    setShowAdd(false);
  };

  // Save edited quantity
  const handleSave = (id) => {
    updateProduct(id, { quantity: Number(editQty) });
    setEditId(null);
  };

  // Delete with confirmation
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  return (
    <>
      {/* Add Product button */}
      {user?.role === "admin" && (
        <button
          className="add-product-btn"
          onClick={() => setShowAdd(!showAdd)}
        >
          Add Product
        </button>
      )}

      {/* Add Product Form */}
      {showAdd && (
        <div style={{ marginBottom: "16px" }}>
          <input
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <button onClick={handleAdd}>Save</button>
        </div>
      )}

      {/* Product Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            {user?.role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>

              <td>
                {editId === item.id ? (
                  <input
                    value={editQty}
                    onChange={(e) => setEditQty(e.target.value)}
                  />
                ) : (
                  item.quantity
                )}
              </td>

              {user?.role === "admin" && (
                <td>
                  {editId === item.id ? (
                    <button onClick={() => handleSave(item.id)}>
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setEditId(item.id);
                        setEditQty(item.quantity);
                      }}
                    >
                      Edit
                    </button>
                  )}

                  <button onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
