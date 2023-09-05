import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const Movies = ({movies}) => {
    return (
        <div className='Movies'>
            {
                movies?.length > 0
                ? (
                    <div className='Movies'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID}/>
                        ))}
                    </div>  
                ) : (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }          
        </div>
    );
}

export default Movies;