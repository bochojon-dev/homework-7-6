import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import "./Admin.css";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin-navbar/AdminNavbar";

const Admin = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={`admin ${toggle ? "close" : ""}`}>
        <Sidebar />
        <div>
          <AdminHeader setToggle={setToggle} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
