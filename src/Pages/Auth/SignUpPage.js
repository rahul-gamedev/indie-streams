import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebaseConfig";

function SignUpPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      alert("Signup Successful!");
      navigate("/home");
    });
  };

  return (
    <div>
      <h1>SignUpPage</h1>
      <form
        onSubmit={handleSignIn}
        style={{
          margin: "auto",
          width: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        ></input>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default SignUpPage;
