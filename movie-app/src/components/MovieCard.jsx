import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={getClassByRate(movie.vote_average)}>
          {movie.vote_average}
        </span>
      </div>
      <div className="movie-overview">
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

// Helper function to determine color based on rating
const getClassByRate = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

export default MovieCard;
