import React from 'react'
import MovieItem from './MovieItem'
import "./MovieRow.css"

function MovieRow(props) {
    return (
        <div className="Row">
            <h1>{props.heading}</h1>
            
            <div className="items">
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=1'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=2'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=4'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=5'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=6'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=6234'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=8'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=7'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=9'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=12'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=643'></MovieItem>
                <MovieItem poster='https://source.unsplash.com/random/720x1280?sig=623'></MovieItem>
                
            </div>
        </div>
    )
}

export default MovieRow