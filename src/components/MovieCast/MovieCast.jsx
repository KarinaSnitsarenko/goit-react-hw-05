import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/moviesApi.js";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieCastActor from "../MovieCastActor/MovieCastActor.jsx";

function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setLoading(true);
        setError(false);
        const cast = await getMovieCast(movieId);
        setActors(cast.slice(0, 3));
        console.log(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId, setLoading, setError]);

  return (
    <>
      {actors.length > 0 && (
        <ul className={css.actorsList}>
          {actors.map((actor) => (
            <li key={actor.id} className={css.actorsListItem}>
              <MovieCastActor actor={actor} />
            </li>
          ))}
        </ul>
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}

export default MovieCast;
