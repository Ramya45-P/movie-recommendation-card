import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Avengers");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const fetchMovies = async () => {
    setLoading(true);

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );

    if (response.data.Search) {
      setMovies(response.data.Search);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Listing App</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchMovies}>Search</button>

      {loading && <h2>Loading...</h2>}

      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />

            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;