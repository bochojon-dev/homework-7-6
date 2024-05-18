import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/not-found.webp";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={notFound} alt="not found" />
      <Link to={"/"}>
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
