function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <div
        style={{
          height: "300px",
          backgroundColor: "#444",
          borderRadius: "10px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {movie.title}
      </div>

      <h2>{movie.title}</h2>

      <p>Genre: {movie.genre}</p>

      <p>⭐ {movie.rating}</p>

      <button>Add to Watchlist</button>

    </div>
  );
}

export default MovieCard;