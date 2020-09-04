const API_KEY = '599119075bf5fe0efd79f9ac1dcb4e32';

export default{
    fetchTrending : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryn: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,

}