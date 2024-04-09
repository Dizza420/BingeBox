document.addEventListener("DOMContentLoaded", () => {
    const ApiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzU2MTFiNGRhMzlkNTdjOGU5YzdhNTExZDliMjhjMSIsInN1YiI6IjY1MzM3ZTE3OTFmMGVhMDEzODg3YmNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BKdzzFARfi0cIvewGbOzWRFTjNn0Fqpa6HOSxLMcVE";
    const TopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=';
    const PopularTv = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=';
    const PopularMovie = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=';
    const tv = "https://api.themoviedb.org/3/discover/tv?language=en-US&page="
    const topPanel = document.querySelector(".TopRated .panel");
    const popTvPanel = document.querySelector(".PopularTv .panel");
    const popMoviePanel = document.querySelector(".PopularMovie .panel");
    const tvPanel = document.querySelector(".TvShows .panel");
    const images = "https://image.tmdb.org/t/p/original";
    let allMovieTray = document.querySelectorAll('.panel');
    let scrollbtnleftall = document.querySelectorAll('.LeftBt');
    let scrollbtnrightall = document.querySelectorAll('.RightBt');
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ApiKey}`
        }
    };

    let genres = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: 'Family',
        14: 'Fantasy',
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
        10759: "Action & Adventure",
        10762: "Kids",
        10763: "News",
        10764: "Reality",
        10765: "Sci-Fi & Fantasy",
        10766: "Soap",
        10767: "Talk",
        10768: "War & Politics",
    }
    
    fetch(TopRated + String(Math.floor(Math.random() * 10) + 1), options)
        .then(response => response.json())
        .then(response => {
            let Featured = document.querySelector('.featured');
            let randomIndex = Math.floor(Math.random() * response.results.length);
            let randomBackdropPath = response.results[randomIndex].backdrop_path;
            let backdropImageUrl = `https://image.tmdb.org/t/p/original${randomBackdropPath}`;
            Featured.style.backgroundImage = `linear-gradient(to right, black,rgba(0, 0, 0, 0)), url('${backdropImageUrl}')`;
            Featured.querySelector('h2').innerHTML = response.results[randomIndex].title;
            Featured.querySelector('.genres').innerHTML += `<span>${response.results[randomIndex].vote_average}/10</span>`;
            let genrelist = "";
            response.results[randomIndex].genre_ids.forEach(element => {
                genrelist += genres[element] + ", ";
            });
            Featured.querySelector('.genres').innerHTML += genrelist.slice(0, genrelist.length - 2);
            Featured.querySelector('.overview').innerHTML = response.results[randomIndex].overview;
        })
        .catch(err => console.error(err));

    fetch(`${TopRated}${(Math.floor(Math.random() * 10) + 1)}`, options)
        .then(response => response.json())
        .then(e => {
            console.log(e.results);
            return e.results;
        })
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                let image="";
                if(!response[i].poster_path){
                    image="/assets/blank.svg";
                   
                }else{
                    image=`${images}${response[i].poster_path}`;
                } 
                topPanel.innerHTML += `
            <div class="card">
            <a class="card-link" href="/details.html?movie=${response[i].id}">
                <img src="${image}"/>
                <div>${response[i].title}</div>
                </a>
            </div>
            `;
                console.log(response[i])
            };


        })
        .catch(err => console.error(err));



    fetch(`${PopularTv}${(Math.floor(Math.random() * 10) + 1)}`, options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                popTvPanel.innerHTML += `
                <div class="card">
                <a class="card-link" href="/details.html?tv=${response[i].id}">
                    <img src="${images}${response[i].poster_path}"/>
                    <div>${response[i].name}</div>
                    </a>
                </div>
                `;
                console.log(response[i])
            };

        })
        .catch(err => console.error(err));

    fetch(`${tv}${(Math.floor(Math.random() * 10) + 1)}`, options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                tvPanel.innerHTML += `
                <div class="card">
                <a class="card-link" href="/details.html?tv=${response[i].id}">
                    <img src="${images}${response[i].poster_path}"/>
                    <div>${response[i].name}</div>
                    </a>
                </div>
                `;
                console.log(response[i])
            };

        })
        .catch(err => console.error(err));
        fetch(`${PopularMovie}${(Math.floor(Math.random() * 10) + 1)}`, options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                popMoviePanel.innerHTML += `
                <div class="card">
                <a class="card-link" href="/details.html?movie=${response[i].id}">
                    <img src="${images}${response[i].poster_path}"/>
                    <div>${response[i].title}</div>
                    </a>
                </div>
                `;
                console.log(response[i])
            };

        })
        .catch(err => console.error(err));
   

    for (let i = 0; i < scrollbtnleftall.length; i++) {
        scrollbtnleftall[i].addEventListener('click', (event) => {
            event.preventDefault();
            allMovieTray[i].scrollLeft -= 500;
        });
    }

    for (let i = 0; i < scrollbtnrightall.length; i++) {
        scrollbtnrightall[i].addEventListener('click', (event) => {
            event.preventDefault();
            allMovieTray[i].scrollLeft += 500;
        });
    }



});
