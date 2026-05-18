import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard(props) {
  const [watchlist, setWatchlist] = useState(false);

  return (
    <div className="movie-card">
      <img src={props.image} alt={props.title} className="movie-image" />

      <div className="movie-content">
        <h2>{props.title}</h2>

        <p>
          <strong>Genre:</strong> {props.genre}
        </p>

        <p>
          <strong>Rating:</strong> {props.rating}
        </p>

        <p className="description">{props.description}</p>

        <button onClick={() => setWatchlist(!watchlist)}>
          {watchlist ? "Added" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;