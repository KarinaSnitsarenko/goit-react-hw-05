import clsx from "clsx";
import { useEffect, useState, useRef, Suspense } from "react";
import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useLocation,
} from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { getMovieDetails } from "../../services/moviesApi.js";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);

  function linkClasses({ isActive }) {
    return clsx(css.infoLink, {
      [css.active]: isActive,
    });
  }

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId, setLoading, setError, location]);

  return (
    <>
      <Link className={css.backLink} to={backLinkRef.current ?? "/"}>
        <HiArrowLeft /> Go back
      </Link>
      {movieDetails !== null && (
        <div className={css.detailsContainer}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>

          <div className={css.detailsContainer}>
            <h1>{movieDetails.title}</h1>
            <p>Rating: {movieDetails.vote_average.toFixed(2)}/10</p>
            <h2>Overview</h2>
            <p className={css.detailsOverview}>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>

            <div>
              <h3>Interesting information about movie</h3>
              <ul>
                <li>
                  <NavLink className={linkClasses} to="cast">
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink className={linkClasses} to="reviews">
                    Reviews
                  </NavLink>
                </li>
              </ul>

              <div>
                <Suspense fallback={<b>Loading...</b>}>
                  <Outlet />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && movieDetails === null && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}

export default MovieDetailsPage;
