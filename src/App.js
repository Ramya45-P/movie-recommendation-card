import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const movies = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: 4.8,
      image:
        "https://via.placeholder.com/300x450?text=Interstellar",
    },
    {
      id: 2,
      title: "Joker",
      genre: "Drama",
      rating: 4.7,
      image:
        "https://via.placeholder.com/300x450?text=Joker",
    },
    {
      id: 3,
      title: "Avatar",
      genre: "Fantasy",
      rating: 4.6,
      image:
        "https://via.placeholder.com/300x450?text=Avatar",
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Movie Recommendation App</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "250px", marginBottom: "20px" }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {filteredMovies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px" }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                display: "block",
              }}
            />

            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>⭐ {movie.rating}</p>

            <button>Add to Watchlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}