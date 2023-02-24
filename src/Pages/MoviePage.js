import React from 'react'

function MoviePage(movie) {
  return (
    <div>
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
    </div>
  )
}

export default MoviePage