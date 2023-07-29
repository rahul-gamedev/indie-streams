import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>WelcomePage</h1>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        SignUp
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default WelcomePage;
