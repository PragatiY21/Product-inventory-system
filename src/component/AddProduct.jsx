import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import Modal from "./Modal";

const AddProduct = () => {
  const { addProduct } = useProduct();
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const handleSubmit = () => {
    addProduct({
      name,
      price: Number(price),
      quantity: Number(qty)
    });

    setName("");
    setPrice("");
    setQty("");
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Add Product</button>

      {open && (
        <Modal title="Add Product" onClose={() => setOpen(false)}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            placeholder="Quantity"
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <button onClick={handleSubmit}>Save</button>
        </Modal>
      )}
    </>
  );
};

export default AddProduct;
