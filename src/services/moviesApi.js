import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDlmZGIwMDcwM2ZhZDdkYmI3NjZlMTk0YTAxYjk2MyIsInN1YiI6IjY2MTdkZDFkZjM2YTMyMDE2M2Y5M2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQ0acJikyZlHNeKjMk8n447NY77SyCn4CZu0iXi5_Mw";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params = {
//   language: "en-US",
// };
// axios.defaults.headers = {
//   Authorization:
//     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDlmZGIwMDcwM2ZhZDdkYmI3NjZlMTk0YTAxYjk2MyIsInN1YiI6IjY2MTdkZDFkZjM2YTMyMDE2M2Y5M2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQ0acJikyZlHNeKjMk8n447NY77SyCn4CZu0iXi5_Mw",
// };
async function getTrendingMovies() {
  const response = await axios("/trending/movie/day?language=en-US", options);
  return response.data.results;
}

async function getMovieDetails(id) {
  const response = await axios(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function getMovieCast(id) {
  const response = await axios(`/movie/${id}/credits`, options);
  return response.data.cast;
}

async function getMovieReviews(id) {
  const response = await axios(`/movie/${id}/reviews`, options);
  return response.data.results;
}

async function getMoviesByName(name) {
  const response = await axios("/search/movie", {
    params: {
      query: name,
    },
    ...options,
  });
  return response.data.results;
}

export {
  getTrendingMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getMoviesByName,
};
