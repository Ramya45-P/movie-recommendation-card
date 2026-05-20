function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <button onClick={props.fetchMovies}>
        Search
        </button>
    </div>
  );
}

export default SearchBar;