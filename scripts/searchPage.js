import { ApiKey, tvSearchURL, movieSearchURL, peopleSearchURL, collectionsSearchURL, companiesSearchURL, options, images } from "./essentials.js";

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
        if (searchURL === tvSearchURL) {
            fetch(searchURL + query, options)
                .then(response =>  response.json())
                .then(response=>response.results)
                .then(response => {
                    result.innerHTML = "";
                    for (let i = 0; i < response.length; i++) {
                        const resultCard = document.createElement("div");
                        resultCard.classList.add("result-card");
                        let poster = document.createElement("img");
                        poster.classList.add("poster");
                        poster.src=`${images}${response[i].poster_path}`;
                        resultCard.appendChild(poster);
                        let name =document.createElement("div");
                        name.classList.add("name");
                        name.innerText=`${response[i].name}`;
                        resultCard.appendChild(name); 
                        result.appendChild(resultCard);
                        resultCard.addEventListener("click",()=>{
                            window.location.href=`/details.html?tv=${response[i].id}`;
                        });

                    }
                })
                .catch(error => console.error());
                
        }
        else if (searchURL === movieSearchURL) {
            fetch(searchURL + query, options)
                .then(response =>  response.json())
                .then(response=>response.results)
                .then(response => {
                    result.innerHTML = "";
                    for (let i = 0; i < response.length; i++) {
                        const resultCard = document.createElement("div");
                        resultCard.classList.add("result-card");
                        let poster = document.createElement("img");
                        poster.classList.add("poster");
                        poster.src=`${images}${response[i].poster_path}`;
                        resultCard.appendChild(poster);
                        let name =document.createElement("div");
                        name.classList.add("name");
                        name.innerText=`${response[i].title}`;
                        resultCard.appendChild(name); 
                        result.appendChild(resultCard);
                        resultCard.addEventListener("click",()=>{
                            window.location.href=`/details.html?movie=${response[i].id}`;
                        });

                    }
                })
                .catch(error => console.error());
                
        }
        else if (searchURL === collectionsSearchURL) {
            fetch(searchURL + query, options)
                .then(response =>  response.json())
                .then(response=>response.results)
                .then(response => {
                    result.innerHTML = "";
                    for (let i = 0; i < response.length; i++) {
                        const resultCard = document.createElement("div");
                        resultCard.classList.add("result-card");
                        let poster = document.createElement("img");
                        poster.classList.add("poster");
                        poster.src=`${images}${response[i].poster_path}`;
                        resultCard.appendChild(poster);
                        let name =document.createElement("div");
                        name.classList.add("name");
                        name.innerText=`${response[i].name}`;
                        resultCard.appendChild(name); 
                        result.appendChild(resultCard);
                        resultCard.addEventListener("click",()=>{
                            window.location.href=`/details.html?tv=${response[i].id}`;
                        });

                    }
                })
                .catch(error => console.error());
                
        }
        else if (searchURL === peopleSearchURL) {
            fetch(searchURL + query, options)
                .then(response =>  response.json())
                .then(response=>response.results)
                .then(response => {
                    result.innerHTML = "";
                    for (let i = 0; i < response.length; i++) {
                        const resultCard = document.createElement("div");
                        resultCard.classList.add("result-card");
                        let poster = document.createElement("img");
                        poster.classList.add("poster");
                        poster.src=`${images}${response[i].profile_path}`;
                        resultCard.appendChild(poster);
                        let name =document.createElement("div");
                        name.classList.add("name");
                        name.innerText=`${response[i].name}`;
                        resultCard.appendChild(name); 
                        result.appendChild(resultCard);
                        resultCard.addEventListener("click",()=>{
                            window.location.href=`/details.html?person=${response[i].id}`;
                        });

                    }
                })
                .catch(error => console.error());
                
        }
        else if (searchURL === companiesSearchURL) {
            fetch(searchURL + query, options)
                .then(response =>  response.json())
                .then(response=>response.results)
                .then(response => {
                    result.innerHTML = "";
                    for (let i = 0; i < response.length; i++) {
                        const resultCard = document.createElement("div");
                        resultCard.classList.add("result-card");
                        let logo = document.createElement("img");
                        logo.classList.add("logo");
                        logo.src=`${images}${response[i].logo_path}`;
                        resultCard.appendChild(logo);
                        let name =document.createElement("div");
                        name.classList.add("name");
                        name.innerText=`${response[i].name}`;
                        resultCard.appendChild(name); 
                        result.appendChild(resultCard);
                        resultCard.addEventListener("click",()=>{
                            window.location.href=`/details.html?tv=${response[i].id}`;
                        });

                    }
                })
                .catch(error => console.error());
                
        }
        else if (searchURL === peopleSearchURL) {
            fetch(searchURL + query, options)
                .then(response =>  response.json())
                .then(response=>response.results)
                .then(response => {
                    result.innerHTML = "";
                    for (let i = 0; i < response.length; i++) {
                        const resultCard = document.createElement("div");
                        resultCard.classList.add("result-card");
                        let poster = document.createElement("img");
                        poster.classList.add("poster");
                        poster.src=`${images}${response[i].poster_path}`;
                        resultCard.appendChild(poster);
                        let name =document.createElement("div");
                        name.classList.add("name");
                        name.innerText=`${response[i].name}`;
                        resultCard.appendChild(name); 
                        result.appendChild(resultCard);
                        resultCard.addEventListener("click",()=>{
                            window.location.href=`/details.html?person=${response[i].id}`;
                        });

                    }
                })
                .catch(error => console.error());
                
        }
    };

    tv.addEventListener("click", () => {
        tvStatus = 1;
        movieStatus = 0;
        peopleStatus = 0;
        collectionsStatus = 0;
        companiesStatus = 0;
        if (tvStatus === 1) {
            fetchResults(tvSearchURL);
        }
    });

    movie.addEventListener("click", () => {
        tvStatus = 0;
        movieStatus = 1;
        peopleStatus = 0;
        collectionsStatus = 0;
        companiesStatus = 0;
        if (movieStatus === 1) {
            fetchResults(movieSearchURL);
        }
    });

    people.addEventListener("click", () => {
        tvStatus = 0;
        movieStatus = 0;
        peopleStatus = 1;
        collectionsStatus = 0;
        companiesStatus = 0;
        if (peopleStatus === 1) {
            fetchResults(peopleSearchURL);
        }
    });

    collections.addEventListener("click", () => {
        tvStatus = 0;
        movieStatus = 0;
        peopleStatus = 0;
        collectionsStatus = 1;
        companiesStatus = 0;
        console.log("ok");
        if (collectionsStatus === 1) {
            fetchResults(collectionsSearchURL);
        }
    });

    companies.addEventListener("click", () => {
        tvStatus = 0;
        movieStatus = 0;
        peopleStatus = 0;
        collectionsStatus = 0;
        companiesStatus = 1;
        if (companiesStatus === 1) {
            fetchResults(companiesSearchURL);
        }
    });




})