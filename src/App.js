import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";

//PAGES
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/Auth/SignUpPage";
import LoginPage from "./Pages/Auth/LoginPage";
import WelcomePage from "./Pages/WelcomePage";
import PublishPage from "./Pages/PublishPage";
import WatchPage from "./Pages/WatchPage";
import NavBar from "./Components/NavBar";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/publish" element={<PublishPage></PublishPage>}></Route>
        <Route path="/watch/:id" element={<WatchPage></WatchPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
