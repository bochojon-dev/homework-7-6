import React, { useState } from "react";
import axios from "../../../api";

let initialState = {
  name: "",
  price: "",
};

const CreateProduct = () => {
  const [newUser, setNewProduct] = useState(initialState);
  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("/users", newUser)
      .then((res) => {
        setNewProduct(initialState);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 style={{ paddingTop: 40 }}>Create User</h2>
      <form onSubmit={handleCreate} action="">
        <input
          required
          value={newUser.name}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          placeholder="Mijoz ismini kriting..."
        />
        <input
          required
          value={newUser.price}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
          }
          type="number"
          placeholder="Mijoz Yoshini kriting..."
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
