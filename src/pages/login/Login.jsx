import React from "react";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const handleChnage = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChnage}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChnage}
        />
        <button className="">Login</button>
      </div>
    </div>
  );
};

export default Login;
