function MovieModal(props) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="close-btn"
          onClick={props.closeModal}
        >
          X
        </button>

        <img
          src={props.movie.Poster}
          alt={props.movie.Title}
        />

        <h2>{props.movie.Title}</h2>

        <p>{props.movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieModal;