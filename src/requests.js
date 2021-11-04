const API_KEY = "d850e4549c24e77d6855340bda1ca950";

const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&switch_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
//discover/movie?api_key=d850e4549c24e77d6855340bda1ca950&with_genres=99
