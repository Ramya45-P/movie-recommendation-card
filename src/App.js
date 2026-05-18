import React from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const movie = {
    title: "Inception",
    genre: "Sci-Fi / Thriller",
    rating: "8.8/10",
    description:
      "A skilled thief enters dreams to steal secrets and gets a final chance at redemption.",
    image:
      "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
  };

  return (
    <div className="app">
      <h1>Movie Recommendation Card</h1>

      <MovieCard
        title={movie.title}
        genre={movie.genre}
        rating={movie.rating}
        description={movie.description}
        image={movie.image}
      />
    </div>
  );
}

export default App;