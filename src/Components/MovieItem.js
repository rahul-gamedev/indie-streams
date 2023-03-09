import React from 'react'
import "./MovieItem.css"

function MovieItem(props) {
    return (
        <div className="item">
            <img src={props.poster} alt="" />
            <div className="item-info">
                <div className="emphasis">
                    <h1 className='title'>{props.title}</h1>
                <p className='description'>{props.description}</p>
                </div>
            </div>
            
      </div>
  )
}

export default MovieItem