import ApiKey from "./mainApi.js";
import { tvSearchURL, movieSearchURL } from "./search.js";
const peopleSearchURL="https://api.themoviedb.org/3/search/person?query=";
const collectionsSearchURL="https://api.themoviedb.org/3/search/collection?query=";
const companiesSearchURL="https://api.themoviedb.org/3/search/company?query=";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ApiKey}`
    }
};
const idparams = new URLSearchParams(window.location.search);
const query = idparams.get("query");
document.addEventListener("DOMContentLoaded", () => {

    const tv = document.querySelector(".Tv");
    const movie = document.querySelector(".Movies");
    const people = document.querySelector(".People");
    const collections = document.querySelector(".Collections");
    const companies = document.querySelector(".Companies");
    const result = document.querySelector(".result");

    let tvStatus = 0;
    let movieStatus = 0;
    let peopleStatus = 0;
    let collectionsStatus = 0;
    let companiesStatus = 0;

    function fetchResults(searchURL) {
        fetch(searchURL + query, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const results = data.results;
                displayResults(results);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };
    
    function displayResults(results) {
       
        result.innerHTML = ""; 
        for (let i = 0; i < results.length; i++) {
            const resultCard = document.createElement("div");
            resultCard.classList.add("result-card");
            resultCard.innerHTML = `${result.name}`;
            result.appendChild(resultCard);
            
        }
    };
    tv.addEventListener("click", () => {
        tvStatus=1;
        movieStatus=0;
        peopleStatus=0;
        collectionsStatus=0;
        companiesStatus=0;
    });

    movie.addEventListener("click", () => {
        tvStatus=0;
        movieStatus=1;
        peopleStatus=0;
        collectionsStatus=0;
        companiesStatus=0;
    });

    people.addEventListener("click", () => {
        tvStatus=0;
        movieStatus=0;
        peopleStatus=1;
        collectionsStatus=0;
        companiesStatus=0;
    });

    collections.addEventListener("click", () => {
        tvStatus=0;
        movieStatus=0;
        peopleStatus=0;
        collectionsStatus=1;
        companiesStatus=0;
    });

    companies.addEventListener("click", () => {
        tvStatus=0;
        movieStatus=0;
        peopleStatus=0;
        collectionsStatus=0;
        companiesStatus=1;
    });

if (tvStatus===1) {
    fetchResults(tvSearchURL);
}
else if (movieStatus) {
    fetchResults(movieSearchURL);
}
else if (peopleStatus) {
    fetchResults(peopleSearchURL);
}
else if (collectionsStatus) {
    fetchResults(collectionsSearchURL);
}
else if (companiesStatus) {
    fetchResults(companiesSearchURL);
}

})