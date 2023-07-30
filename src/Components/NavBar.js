import React from "react";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="Nav">
      <h1
        className="heading"
        onClick={() => {
          navigate("/home");
        }}
      >
        IndieStreams
      </h1>
      <div className="nav-btns">
        <p className="mail">{auth.currentUser?.email}</p>

        {!auth.currentUser && (
          <div>
            <Link to={"/signup"} className="button-outline">
              SignUp
            </Link>
            <Link to={"/login"} className="button">
              Login
            </Link>
          </div>
        )}
        {auth.currentUser && (
          <div class="user-btns">
            <Link to={"/publish"} className="button">
              Publish
            </Link>
            <button
              className="button-outline"
              onClick={() => {
                signOut(auth);
              }}
            >
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
