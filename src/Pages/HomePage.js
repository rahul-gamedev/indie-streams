import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import MovieRow from "../Components/MovieRow";
import NavBar from "../Components/NavBar";
import "./HomePage.css"

function HomePage() {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <Banner></Banner>

      <MovieRow></MovieRow>
      <MovieRow></MovieRow>
      <MovieRow></MovieRow>
      <MovieRow></MovieRow>
      <MovieRow></MovieRow>
      <MovieRow></MovieRow>
      <MovieRow></MovieRow>
      <MovieRow></MovieRow>
      <MovieRow></MovieRow>


      <Footer></Footer>
    </div>
  );
}

export default HomePage;
