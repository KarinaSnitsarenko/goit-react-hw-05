import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <span className={css.movieTitle}>{movie.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
