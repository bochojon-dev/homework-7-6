import React, { useState } from "react";
import axios from "../../../api/index";

let initialState = {
  nomi: "",
  price: "",
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("/products", newProduct)
      .then((res) => {
        setNewProduct(initialState);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 style={{ paddingTop: 40 }}>CreateProduct</h2>
      <form onSubmit={handleCreate} action="">
        <input
          required
          value={newProduct.nomi}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, nomi: e.target.value }))
          }
          type="text"
          placeholder="Mahsulot nomini kriting..."
        />
        <input
          required
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
          }
          type="number"
          placeholder="Mahsulot narxini kriting..."
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
