import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";
import ReactPlayer from "react-player";
import sinspire from "../videos/sinspire-movie.mp4";

function WatchPage() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const movieRef = doc(database, "movies", id);
      const movieSnap = await getDoc(movieRef);
      if (movieSnap.exists()) {
        setMovie(movieSnap.data());
      } else {
        alert("Not Found...");
      }
    };
    getMovie();
  }, []);

  return (
    <div>
      <ReactPlayer
        className="react-player fixed-bottom"
        url={sinspire}
        width="100%"
        height="100%"
        controls={true}
      />
      <h1>{movie.MovieName}</h1>
      <p>{movie.Synopsis}</p>
    </div>
  );
}

export default WatchPage;
