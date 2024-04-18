import {ApiKey,options,movieSearchURL,tvSearchURL} from "./essentials.js";

const queryList = document.querySelector(".query-list");
const searchbar = document.querySelector(".search");

function searchMovies(searchTerm) {
  fetch(`${movieSearchURL}${searchTerm}`, options)
    .then(response => response.json())
    .then(data => data.results)
    .then(results => {
      if (results) {
        let movieWrapper = document.createElement("div");
        movieWrapper.classList.add("movie-wrapper");
        queryList.appendChild(movieWrapper);
        movieWrapper.innerHTML = "<h3>Movies</h3>";

        for (let i = 0; i < results.length; i++) {
          let result = document.createElement("div");
          result.innerHTML = `${results[i].title}`;
          result.classList.add("res");
          movieWrapper.appendChild(result);
          result.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = `/details.html?movie=${results[i].id}`;
          });
        }
      }
    })
    .catch(err => console.error("Error fetching movies:", err));
}

function searchTVShows(searchTerm) {
  fetch(`${tvSearchURL}${searchTerm}`, options)
    .then(response => response.json())
    .then(data => data.results)
    .then(results => {
      if (results) {
        let tvWrapper = document.createElement("div");
        tvWrapper.classList.add("tv-wrapper");
        queryList.appendChild(tvWrapper);
        tvWrapper.innerHTML = "<h3>Tv Shows</h3>";

        for (let i = 0; i < results.length; i++) {
          let result = document.createElement("div");
          result.innerHTML = `${results[i].name}`;
          result.classList.add("res");
          tvWrapper.appendChild(result);
          result.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = `/details.html?tv=${results[i].id}`;
          });
        }
      }
    })
    .catch(err => console.error("Error fetching TV shows:", err));
}

searchbar.addEventListener('input', (event) => {
  event.preventDefault();
  let searchTerm = searchbar.value.trim();
  queryList.innerHTML = '';

  if (searchTerm && searchTerm.length > 0) {
    searchMovies(searchTerm);
    searchTVShows(searchTerm);
  }
});

let searchBt=document.querySelector(".search-bt");
searchBt.addEventListener("click",()=>{
      window.location.href=`/search.html?query=${searchbar.value}`
      
});

export {tvSearchURL,movieSearchURL};