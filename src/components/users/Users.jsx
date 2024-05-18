// import React, { memo } from "react";
// import "../users/Users.css";
// // import axios from "../../api";
// import Products from "../products/Products";

// const Users = () => {
//   //   let userItems = data2?.map((e) => (
//   //     <div key={e.id} className="card">
//   //       <img src={e.image} alt="user" />
//   //       <h3>{e.name}</h3>
//   //       <p>${e.age}</p>
//   //       {isAdmin ? (
//   //         <>
//   //           <button>Delete</button>
//   //         </>
//   //       ) : (
//   //         <></>
//   //       )}
//   //     </div>
//   //   ));
//   return (
//     <div style={{ paddingTop: 100 }} className="users container">
//       <h2>Users</h2>
//       <Products />
//     </div>
//   );
// };

// export default memo(Users);
import Products from "../../components/products/Products";
// import useFetch from "../hooks/UseFetch";

const Users = () => {
  //   let { data } = useFetch("/products");
  //   let { data2 } = useFetch("/users");
  return (
    <div className="user">
      <h2>Users</h2>
      <Products />
    </div>
  );
};

export default Users;
