import React, { useState } from "react";
import { storage, database, auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

function PublishPage() {
  const navigate = useNavigate();

  const [movieName, setMovieName] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [poster, setPoster] = useState();
  const [posterUrl, setPosterUrl] = useState();
  const [movie, setMovie] = useState();
  const [movieUrl, setMovieUrl] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (movieName && synopsis && poster && movie) {
      try {
        const docRef = await addDoc(collection(database, "movies"), {
          MovieName: movieName,
          Synopsis: synopsis,
          Poster: "",
          Movie: "../videos/sample-movie.mp4",
          User: auth.currentUser.email,
        });
        console.log("Document written with ID: ", docRef.id);
        await UploadPoster(docRef.id);
        await UploadMovie(docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("FIll All the Fields");
    }
  };

  const UploadPoster = async (id) => {
    if (poster === null) return;

    const fileRef = ref(storage, `movies/` + `${movieName}-poster`);
    await uploadBytesResumable(fileRef, poster, {});
    getDownloadURL(fileRef)
      .then(async (URL) => {
        setPosterUrl(URL);
        const docu = doc(database, "movies", id);
        await updateDoc(docu, {
          Poster: URL,
        });

        console.log("Poster Upload Successfull!" + URL);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const UploadMovie = async (id) => {
    if (movie === null) return;
    const fileRef = ref(storage, `movies/` + `${movieName}-movie`);
    await uploadBytesResumable(fileRef, movie, {});
    getDownloadURL(fileRef)
      .then(async (URL) => {
        setMovieUrl(URL);
        const docu = doc(database, "movies", id);
        // await updateDoc(docu, {
        //   Movie: URL,
        // });
        console.log("Movie Upload Successfull!" + URL);
        alert("Upload Completed");
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => {
            e.preventDefault();
            setMovieName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Synopsis"
          value={synopsis}
          onChange={(e) => {
            e.preventDefault();
            setSynopsis(e.target.value);
          }}
        ></input>

        <label>Poster</label>
        <input
          className="file"
          type="file"
          accept="image/jpeg"
          onChange={(e) => {
            if (e.target.files[0]) {
              setPoster(e.target.files[0]);
            }
          }}
        ></input>

        <label>Movie</label>
        <input
          className="file"
          type="file"
          accept="video/mp4"
          onChange={(e) => {
            if (e.target.files[0]) {
              setMovie(e.target.files[0]);
            }
          }}
        ></input>

        <div class="submit">
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PublishPage;
