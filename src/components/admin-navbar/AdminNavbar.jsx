import { IoIosMenu } from "react-icons/io";
import React from "react";

const AdminNavbar = ({ setClose }) => {
  return (
    <div className="admin_navbar">
      <button onClick={() => setClose((p) => !p)}>
        <IoIosMenu />
      </button>
      <div>
        <p>John doe</p>
      </div>
    </div>
  );
};

export default AdminNavbar;
