import { IoIosMenu } from "react-icons/io";
import React from "react";
import "../../pages/admin/Admin.css";

const AdminNavbar = ({ setClose }) => {
  return (
    <div className="admin_navbar">
      <button style={{ padding: 0 }} onClick={() => setClose((p) => !p)}>
        <IoIosMenu />
      </button>
      <div>
        <p>John doe</p>
      </div>
    </div>
  );
};

export default AdminNavbar;
