import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>404</p>
      <p>Not Found</p>
      <Link to={"/"}>
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
