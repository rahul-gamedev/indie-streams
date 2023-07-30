import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/watch/${movie.id}`);
  };
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ backgroundImage: `url(${movie.Poster})` }}
    >
      <div class="card-content">
        <div>
          <h2 className="title">{movie.MovieName}</h2>
          <p className="synopsis">{movie.Synopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
