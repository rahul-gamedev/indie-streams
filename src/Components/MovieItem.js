import React from 'react'
import "./MovieItem.css"

function MovieItem(props) {
    return (
        <div className="item">
            <img src={props.poster} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
      </div>
  )
}

export default MovieItem