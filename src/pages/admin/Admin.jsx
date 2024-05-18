import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../admin/Admin.css";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin-navbar/AdminNavbar";

const Admin = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <div className={`admin ${close ? "close" : ""}`}>
        <Sidebar />
        <div>
          <AdminHeader setToggle={setClose} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
