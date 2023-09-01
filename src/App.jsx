import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './sass/app.css'
import searchIcon from './search-icon.svg'

// 31d5ac0d

const API_URL = 'https://www.omdbapi.com?apikey=31d5ac0d'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

    return (
        <div className='app'>
            <h1>MovieSearch</h1>

            <div className='search'>
                <input placeholder='Search for da movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={searchIcon} alt='search icon' onClick={() => searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))};
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

export default App;