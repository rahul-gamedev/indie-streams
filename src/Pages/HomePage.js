import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth, database } from "../firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import MovieCard from "../Components/MovieCard";
import MovieRow from "../Components/MovieRow";

function HomePage() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }

    const getData = async () => {
      const querySnapshot = await getDocs(collection(database, "movies"));
      setMovies(
        querySnapshot.docs.map((movie) => ({
          id: movie.id,
          ...movie.data(),
        }))
      );
    };
    getData();
  }, []);

  return (
    <div>
      <br></br>
      <MovieRow Title="Popular">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </MovieRow>
      <MovieRow Title="Newly Released">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </MovieRow>
    </div>
  );
}

export default HomePage;
