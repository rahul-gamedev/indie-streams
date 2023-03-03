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

      <MovieRow heading = "Trending"></MovieRow>
      <MovieRow heading = "Popular"></MovieRow>
      <MovieRow heading = "Newly Released"></MovieRow>

      <Footer></Footer>
    </div>
  );
}

export default HomePage;
