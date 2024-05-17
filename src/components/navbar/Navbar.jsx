import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let { pathname } = useLocation();
  let isLogin = localStorage.getItem("x-auth-token");

  if (pathname.includes("register") || pathname.includes("admin")) {
    return <></>;
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <h2>Logo</h2>
          <NavLink className="nav_link" to={"/"}>
            Home
          </NavLink>
          <NavLink
            className="nav_link "
            to={isLogin ? "/admin/create-product" : "/login"}
          >
            {isLogin ? "Account" : "Login"}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
