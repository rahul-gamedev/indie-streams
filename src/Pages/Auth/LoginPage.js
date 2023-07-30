import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebaseConfig";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      alert("Login Successful!");
      navigate("/home");
    });
  };

  return (
    <div>
      <h1 className="heading">Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        ></input>

        <label>Password</label>
        <input
          type=""
          placeholder="Password"
          value={password}
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        ></input>

        <div>
          <button className="button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
