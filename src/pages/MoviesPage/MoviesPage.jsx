import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesByName } from "../../services/moviesApi.js";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import css from "./MoviesPage.module.css";

function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";

  function updateQueryParams(query) {
    const params = query !== "" ? { query } : {};
    setSearchParams(params);
  }

  useEffect(() => {
    if (queryParam === "") {
      return;
    }
    async function fetchMoviesByName() {
      try {
        setLoading(true);
        setError(false);
        const foundMovies = await getMoviesByName(queryParam);
        setMovies(foundMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMoviesByName();
  }, [queryParam, setLoading, setError]);
  return (
    <>
      <SearchForm updateQueryParams={updateQueryParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}

export default MoviesPage;
