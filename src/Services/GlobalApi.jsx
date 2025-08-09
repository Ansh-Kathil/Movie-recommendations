import axios from "axios";

// Read API key from environment
const api_key = import.meta.env.VITE_TMDB_API_KEY;

const baseurl = "https://api.themoviedb.org/3/movie";
const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const getmovie = axios.get(`${baseurl}/popular?api_key=${api_key}`);

const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {
  getmovie,
  getMovieByGenreId,
};
