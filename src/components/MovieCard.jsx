const MovieCard = ({
  movie: { imdbID, Year, Poster, Title, Type },
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        {isFavorite ? (
          <button onClick={onRemoveFavorite}>Remove from Favorites</button>
        ) : (
          <button onClick={onAddFavorite}>Add to Favorites</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
