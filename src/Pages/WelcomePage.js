import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "./WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div class="texts">
        <img src="/logo.png" className="logo"></img>
        <h1 className="tag">Stream Your Dreams!</h1>
        <p>Bring Your Vision To the WORLD!</p>
      </div>
    </div>
  );
}

export default WelcomePage;
