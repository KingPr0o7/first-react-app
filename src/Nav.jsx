import { useState, useEffect } from 'react';
import logo from "./images/ncp-logo.png";
import homeIcon from './images/home.svg'
import heartIcon from './images/heart.svg'
import Movies from './Movies';

const API_URL = 'https://www.omdbapi.com?apikey=31d5ac0d'

const Nav = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])
    var searchedTitle = "YOO"

    const searchMovies = async (title) => {
        searchedTitle = title
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
        console.log(data, data.search, movies)
    }

    return (
        <>
            <div className='navbar'>
                <div className="navbar-search">
                    <img id="search-logo" src={logo} alt='Logo Icon'></img>
                    <input id="search-input" type="text" placeholder="Search" onKeyDown={(e) => e.key == 'Enter' ? searchMovies(e.target.value) : null }/>
                </div>

                <div className="navbar-options">
                    <img className="option-icon" src={homeIcon} alt='Home Icon'></img>
                    <img className="option-icon" src={heartIcon} alt='Heart Icon'></img> 
                </div>             
            </div>
            
            <Movies movies={movies}/>
        </>
    )
}

export default Nav;
