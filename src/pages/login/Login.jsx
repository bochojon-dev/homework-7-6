import React, { memo, useState } from "react";
import "../login/Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let user = { username, password };
    setLoading(true);

    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin/create-product");
      })
      .catch((err) => {
        console.log(err);
        toast.error("invalid password or username");
      });
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button disabled={loading}>{loading ? "Loading..." : "Log in"}</button>
      </form>
      <button style={{ "margin-top": 40 }} onClick={() => navigate("/")}>
        Go Home
      </button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default memo(Login);
