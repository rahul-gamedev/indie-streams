import React from "react";
import "./NavBar.css";
import logo from "../Logo/IndieStreams-logo.png";


function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <div className="Links">
        <h3>Home</h3>
        <h3>Movies</h3>
        <h3>Profile</h3>
      </div>
    </div>
  );
}

export default NavBar;
