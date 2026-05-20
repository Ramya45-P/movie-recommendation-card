import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Avengers");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const fetchMovies = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      );

      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log("Error fetching movies:", error);
      setMovies([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Listing App</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={fetchMovies}>Search</button>
      </div>

      {loading && <h2>Loading...</h2>}

      <div className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          !loading && <h3>No movies found</h3>
        )}
      </div>
    </div>
  );
}

export default App;