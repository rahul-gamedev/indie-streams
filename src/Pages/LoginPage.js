import React, { useState } from "react";
import "../App.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${email} \n ${password}`);
  };

  return (
    <div className="Login-form">
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type={"email"}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>

        <input
          value={password}
          type={"password"}
          placeholder="Password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        ></input>

        <button type="Submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
