//6c85936a
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=6c85936a

import { useState, useEffect } from "react";

import MovieCard from "./components/MovieCard";
import SearchIcon from "./assets/search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); //state for the search input
  const [movies, setMovies] = useState([]); //state for the movie array

  useEffect(() => {
    searchMovies("Tibet");
  }, []);

  //function for searching movies by title
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLibrary</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/*conditional rendering of the movies in case there are no search results  */}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
