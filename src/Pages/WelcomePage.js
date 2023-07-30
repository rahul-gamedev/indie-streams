import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "./WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div class="texts">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/indiestreams-7c57c.appspot.com/o/Logo%2FIndieStreamsLogo.png?alt=media&token=9d36ead9-ddc3-4597-82fe-9f3e39de366a"
          className="logo"
        ></img>
        <h1 className="tag">Stream Your Dreams!</h1>
        <p>Bring Your Vision To the WORLD!</p>
      </div>
    </div>
  );
}

export default WelcomePage;
