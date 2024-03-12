const topRated = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=';
const popular = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=';
const tv = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&page=';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzU2MTFiNGRhMzlkNTdjOGU5YzdhNTExZDliMjhjMSIsInN1YiI6IjY1MzM3ZTE3OTFmMGVhMDEzODg3YmNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BKdzzFARfi0cIvewGbOzWRFTjNn0Fqpa6HOSxLMcVE'
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

fetch(topRated + String(Math.floor(Math.random() * 10) + 1), options)
    .then(response => response.json())
    .then(response => {
        let Featured = document.querySelector('.featured');
        let randomIndex = Math.floor(Math.random() * response.results.length);
        let randomBackdropPath = response.results[randomIndex].backdrop_path;
        let backdropImageUrl = `https://image.tmdb.org/t/p/original${randomBackdropPath}`;
        Featured.style.backgroundImage = `    linear-gradient(to right, black,rgba(0, 0, 0, 0)), url('${backdropImageUrl}')`;
        Featured.querySelector('h2').innerHTML = response.results[randomIndex].name;
        Featured.querySelector('.genres').innerHTML+=`<span>${response.results[randomIndex].vote_average}/10</span>`;
        let genrelist="";
        response.results[randomIndex].genre_ids.forEach(element => {
             genrelist+=genres[element]+", ";
        });
        Featured.querySelector('.genres').innerHTML+=genrelist.slice(0,genrelist.length-2);
        Featured.querySelector('.overview').innerHTML = response.results[randomIndex].overview;
    })
    .catch(err => console.error(err));

fetch(topRated + String(Math.floor(Math.random() * 10) + 1), options)
    .then(response => response.json())
    .then(response => {
        let MovieTray = document.querySelector('.topRated .movieTray');
        response.results.forEach(element => {
            MovieTray.innerHTML += `
            <div class="card">
                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                    <div class="movieDesc">
                    <img class="play" src="/assets/Polygon 1.svg">
                    <p>${element.name}</p>
                    </div>
                </div>
            `
            console.log(element)
        });
    })
    .catch(err => console.error(err));



fetch(popular + String(Math.floor(Math.random() * 10) + 1), options)
    .then(response => response.json())
    .then(response => {
        let MovieTray = document.querySelector('.popular .movieTray');
        response.results.forEach(element => {
            MovieTray.innerHTML += `
            <div class="card">
                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                    <div class="movieDesc">
                    <img class="play" src="/assets/Polygon 1.svg">
                    <p>${element.name}</p>
                    </div>
                </div>
            `
            console.log(element)
        });
    })
    .catch(err => console.error(err));




fetch(tv + String(Math.floor(Math.random() * 10) + 1), options)
    .then(response => response.json())
    .then(response => {
        let MovieTray = document.querySelector('.tv .movieTray');
        response.results.forEach(element => {
            MovieTray.innerHTML += `
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                    <div class="movieDesc">
                        <img class="play" src="/assets/Polygon 1.svg">
                        <p>${element.name}</p>
                    </div>
                </div>
            `;
            console.log(element);
        });
    })
    .catch(err => console.error(err));

