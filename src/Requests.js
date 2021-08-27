const API_KEY = "a32260c649a6061e1f030a07c449b551";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}& language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}& language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}& with_network=213`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}& with_genres=28`,
  fetchComedyMovies: `/discover/movies?api_key=${API_KEY}& with_genres=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}& with_genres=27`,
  fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}& with_genres=10749`,
  fetchDocumentaries: `/discover/movies?api_key=${API_KEY}& with_genres=99`,
};

export default requests;
