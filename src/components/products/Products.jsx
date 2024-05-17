import React, { memo } from "react";
import "./Products.css";
import axios from "../../api";

const Products = ({ data, isAdmin, setReload }) => {
  const handleDelete = (id) => {
    axios
      .delete(`/products/${id}`)
      .then((res) => {
        console.log(res);
        setReload((p) => !p);
      })
      .catch((res) => console.log(res));
  };

  let productItems = data?.map((e) => (
    <div key={e.id} className="card">
      <img src={e.image} alt="product" />
      <h3>{e.name}</h3>
      <p>${e.price}</p>
      {isAdmin ? (
        <>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product_cards">{productItems}</div>
    </div>
  );
};

export default memo(Products);
