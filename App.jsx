import './App.css'
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//========== API KEYS FOR MOIVE LIST===========//
const API_URL = 'http://www.omdbapi.com?apikey=bb584228';


const movies = {

  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"

}



const App = () => {

  //======== USING USE-STATE METHOD==========//
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //========= ASYNC FUNCTION && USING FETCH API=======//
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies(`Spiderman`);
  }, []);

  //===== MAIN DIV - SEARCH BOX / MOVIE LIST=========//
  return (
    <div className="app">
      <h1>MovieLand</h1>


      <div className="search">
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon}
          alt="Seacrh"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>


      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )}




    </div>
  );

}

export default App;
