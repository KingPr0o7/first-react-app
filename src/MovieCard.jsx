import React from 'react';

const MovieCard = ({ movie }) => {
    return(
        <div className='movie'>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}></img>
            <h3>{movie.Title}</h3>  
        </div>
    );
}

export default MovieCard