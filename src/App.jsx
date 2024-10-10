//6c85936a
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=6c85936a

import { useState, useEffect } from "react";
//import NavigationMenu from "./components/NavigationMenu";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "./redux/favoritesSlice";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./assets/search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); //state for the search input
  const [movies, setMovies] = useState([]); //state for the movie array

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    searchMovies("Tibet");
  }, []);

  //function for searching movies by title
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  //functions for handeling favorites
  const handleAddFavorite = (movie) => {
    dispatch(addFavorite(movie));
  };

  const handleRemoveFavorite = (imdbID) => {
    dispatch(removeFavorite(imdbID));
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
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onAddFavorite={() => handleAddFavorite(movie)}
              onRemoveFavorite={() => handleRemoveFavorite(movie.imdbID)}
              isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
            />
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
