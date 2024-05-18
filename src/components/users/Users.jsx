import React, { memo } from "react";
import "../users/Users.css";
import axios from "../../api";

const Users = ({ data2, isAdmin, setReload }) => {
  const handleDelete = (id) => {
    axios
      .delete(`/users/${id}`)
      .then((res) => {
        console.log(res);
        setReload((p) => !p);
      })
      .catch((res) => console.log(res));
  };

  let userItems = data2?.map((e) => (
    <div key={e.id} className="card">
      <img src={e.image} alt="user" />
      <h3>{e.name}</h3>
      <p>${e.age}</p>
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
      <h2>Users</h2>
      <div className="user_cards">{userItems}</div>
    </div>
  );
};

export default memo(Users);
