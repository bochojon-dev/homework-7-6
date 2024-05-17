import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <h2 className="sidebar_logo">
        <Link to={"/"}>
          <FaArrowAltCircleLeft />
        </Link>
        <span>Dashboard</span>
      </h2>
      <ul className="sidebar_collection">
        <li className="sidebar_item">
          <NavLink className={"sidebar_link"} to={"create-product"}>
            <IoCreateOutline />
            <span>Create Product</span>
          </NavLink>
        </li>
        <li className="sidebar_item">
          <NavLink className={"sidebar_link"} to={"manage-product"}>
            <IoCreateOutline />
            <span>Manage Product</span>
          </NavLink>
        </li>
      </ul>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default memo(Sidebar);
