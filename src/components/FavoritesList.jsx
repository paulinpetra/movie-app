import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="favorites-list">
      <h1>Your Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="container">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} isFavorite={true} />
          ))}
        </div>
      ) : (
        <h2>No favorite movies added yet.</h2>
      )}
    </div>
  );
};

export default FavoritesList;
