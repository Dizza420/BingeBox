const ApiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzU2MTFiNGRhMzlkNTdjOGU5YzdhNTExZDliMjhjMSIsInN1YiI6IjY1MzM3ZTE3OTFmMGVhMDEzODg3YmNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BKdzzFARfi0cIvewGbOzWRFTjNn0Fqpa6HOSxLMcVE";

const TopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=';
const PopularTv = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=';
const PopularMovie = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=';
const tv = "https://api.themoviedb.org/3/discover/tv?language=en-US&page=";
const images = "https://image.tmdb.org/t/p/original";
const movieSearchURL = "https://api.themoviedb.org/3/search/movie?query=";
const tvSearchURL = "https://api.themoviedb.org/3/search/tv?query=";

const peopleSearchURL = "https://api.themoviedb.org/3/search/person?query=";
const collectionsSearchURL = "https://api.themoviedb.org/3/search/collection?query=";
const companiesSearchURL = "https://api.themoviedb.org/3/search/company?query=";
const person="https://api.themoviedb.org/3/person/";
const tvDetails = "https://api.themoviedb.org/3/tv/";
const movieDetails = "https://api.themoviedb.org/3/movie/";

let options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ApiKey}`
    }
};

export { ApiKey, TopRated, PopularTv, PopularMovie, tv, movieSearchURL, tvSearchURL, peopleSearchURL, collectionsSearchURL, companiesSearchURL, options, images,tvDetails,movieDetails,person};