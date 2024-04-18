import { ApiKey,options,TopRated,PopularTv,PopularMovie,images,tv} from "./essentials.js";
document.addEventListener("DOMContentLoaded", () => {
    
    
    const topPanel = document.querySelector(".TopRated .panel");
    const popTvPanel = document.querySelector(".PopularTv .panel");
    const popMoviePanel = document.querySelector(".PopularMovie .panel");
    const tvPanel = document.querySelector(".TvShows .panel");
    
    let allMovieTray = document.querySelectorAll('.panel');
    let scrollbtnleftall = document.querySelectorAll('.LeftBt');
    let scrollbtnrightall = document.querySelectorAll('.RightBt');
    
    function voteEval(vote, target) {
        if (Number(vote) < 5) {
            target.style.color = "red";
        }
        else if (Number(vote) > 5) {
            target.style.color = "green";
        }
        else {
            target.style.color = "yellow";
        }
    }
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
    /*Featured Movies */
    fetch(TopRated + String(Math.floor(Math.random() * 10) + 1), options)
        .then(response => response.json())
        .then(response => {


            let Featured = document.querySelector('.featured');

            let randomi = Math.floor(Math.random() * response.results.length);
            let randomBackdropPath = response.results[randomi].backdrop_path;
            Featured.addEventListener("click", (event) => {
                event.preventDefault();
                window.location.href = `/details.html?movie=${response.results[randomi].id}`;
            })
            Featured.style.backgroundImage = `linear-gradient(to right, black, rgba(0, 0, 0, 0)), url(${images}${response.results[randomi].backdrop_path})`;
            Featured.querySelector('h2').innerHTML = response.results[randomi].title;
            Featured.querySelector('.genres').innerHTML += `<span>${response.results[randomi].vote_average}/10</span>`;
            let genrelist = "";
            response.results[randomi].genre_ids.forEach(element => {
                genrelist += genres[element] + ", ";
            });
            Featured.querySelector('.genres').innerHTML += genrelist.slice(0, genrelist.length - 2);
            Featured.querySelector('.overview').innerHTML = response.results[randomi].overview;

            console.log(response);
        })
        .catch(err => console.error(err));

    fetch(TopRated + String(Math.floor(Math.random() * 10) + 1), options)
        .then(response => response.json())
        .then(e => e.results)
        .then(response => {
            for (let i = 0; i < response.length; i++) {

               /*individual cards */
                let card = document.createElement("div");
                card.classList.add("card");

                /*wrapper that wraps indivisual cards */
                let cardWrapper = document.createElement("div");
                cardWrapper.classList.add("card-wrapper");
                cardWrapper.appendChild(card);
                topPanel.appendChild(cardWrapper);


                
                /* card poster */
                let poster = document.createElement("img");
                (response[i].poster_path)?(poster.src = `${images}${response[i].poster_path}`):(poster.src="/assets/blank.svg");
                poster.loading="lazy";
                poster.classList.add("poster");
                card.appendChild(poster);

                /*card content. It is under card*/
                let cardContent =document.createElement("div");
                cardContent.classList.add("card-content");
                card.appendChild(cardContent);


                /*card header which is under card content. */
                let cardHeader=document.createElement("div");
                cardHeader.classList.add("card-header");
                cardContent.appendChild(cardHeader);


                let vote = document.createElement("div");
                vote.classList.add("vote");
                vote.innerHTML = `${response[i].vote_average}/10`;
                voteEval(response[i].vote_average, vote);
                cardHeader.appendChild(vote);

                let title = document.createElement("div");
                title.classList.add("title");
                title.innerHTML += `${response[i].title}`;
                cardHeader.appendChild(title);

                /*desc under cardContent */
                let desc=document.createElement("div");
                desc.innerText=`${response[i].overview}`;
                desc.classList.add("desc");
                cardContent.appendChild(desc);

                
                
                card.addEventListener("click", (event) => {
                    event.preventDefault();
                    window.location.href = `/details.html?movie=${response[i].id}`;
                })
                console.log(response[i]);

        }})
        .catch(err => console.error(err));



    fetch(PopularTv + String(Math.floor(Math.random() * 10) + 1), options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                /*individual cards */
                let card = document.createElement("div");
                card.classList.add("card");

                /*wrapper that wraps indivisual cards */
                let cardWrapper = document.createElement("div");
                cardWrapper.classList.add("card-wrapper");
                cardWrapper.appendChild(card);
                popTvPanel.appendChild(cardWrapper);


                
                /* card poster */
                let poster = document.createElement("img");
                (response[i].poster_path)?(poster.src = `${images}${response[i].poster_path}`):(poster.src="/assets/blank.svg");
                poster.loading="lazy";
                poster.classList.add("poster");
                card.appendChild(poster);
                /*card content. It is under card*/
                let cardContent =document.createElement("div");
                cardContent.classList.add("card-content");
                card.appendChild(cardContent);


                /*card header which is under card content. */
                let cardHeader=document.createElement("div");
                cardHeader.classList.add("card-header");
                cardContent.appendChild(cardHeader);


                let vote = document.createElement("div");
                vote.classList.add("vote");
                vote.innerHTML = `${response[i].vote_average}/10`;
                voteEval(response[i].vote_average, vote);
                cardHeader.appendChild(vote);

                let title = document.createElement("div");
                title.classList.add("title");
                title.innerHTML += `${response[i].name}`;
                cardHeader.appendChild(title);

                /*desc under cardContent */
                let desc=document.createElement("div");
                desc.innerText=`${response[i].overview}`;
                desc.classList.add("desc");
                cardContent.appendChild(desc);

                
                
                card.addEventListener("click", (event) => {
                    event.preventDefault();
                    window.location.href = `/details.html?tv=${response[i].id}`;
                })
                console.log(response[i]);
            };

        })
        .catch(err => console.error(err));

    fetch(tv + String(Math.floor(Math.random() * 10) + 1), options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                /*individual cards */
                let card = document.createElement("div");
                card.classList.add("card");

                /*wrapper that wraps indivisual cards */
                let cardWrapper = document.createElement("div");
                cardWrapper.classList.add("card-wrapper");
                cardWrapper.appendChild(card);
                tvPanel.appendChild(cardWrapper);


                
                /* card poster */
                let poster = document.createElement("img");
                (response[i].poster_path)?(poster.src = `${images}${response[i].poster_path}`):(poster.src="/assets/blank.svg");
                poster.loading="lazy";
                poster.classList.add("poster");
                card.appendChild(poster);
                /*card content. It is under card*/
                let cardContent =document.createElement("div");
                cardContent.classList.add("card-content");
                card.appendChild(cardContent);


                /*card header which is under card content. */
                let cardHeader=document.createElement("div");
                cardHeader.classList.add("card-header");
                cardContent.appendChild(cardHeader);


                let vote = document.createElement("div");
                vote.classList.add("vote");
                vote.innerHTML = `${response[i].vote_average}/10`;
                voteEval(response[i].vote_average, vote);
                cardHeader.appendChild(vote);

                let title = document.createElement("div");
                title.classList.add("title");
                title.innerHTML += `${response[i].name}`;
                cardHeader.appendChild(title);

                /*desc under cardContent */
                let desc=document.createElement("div");
                desc.innerText=`${response[i].overview}`;
                desc.classList.add("desc");
                cardContent.appendChild(desc);

                
                
                card.addEventListener("click", (event) => {
                    event.preventDefault();
                    window.location.href = `/details.html?tv=${response[i].id}`;
                })
                console.log(response[i]);
            };

        })
        .catch(err => console.error(err));

    fetch(PopularMovie + String(Math.floor(Math.random() * 10) + 1), options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                /*individual cards */
                let card = document.createElement("div");
                card.classList.add("card");

                /*wrapper that wraps indivisual cards */
                let cardWrapper = document.createElement("div");
                cardWrapper.classList.add("card-wrapper");
                cardWrapper.appendChild(card);
                popMoviePanel.appendChild(cardWrapper);


                
                /* card poster */
                let poster = document.createElement("img");
                (response[i].poster_path)?(poster.src = `${images}${response[i].poster_path}`):(poster.src="/assets/blank.svg");
                poster.loading="lazy";
                poster.classList.add("poster");
                card.appendChild(poster);
                /*card content. It is under card*/
                let cardContent =document.createElement("div");
                cardContent.classList.add("card-content");
                card.appendChild(cardContent);


                /*card header which is under card content. */
                let cardHeader=document.createElement("div");
                cardHeader.classList.add("card-header");
                cardContent.appendChild(cardHeader);


                let vote = document.createElement("div");
                vote.classList.add("vote");
                vote.innerHTML = `${response[i].vote_average}/10`;
                voteEval(response[i].vote_average, vote);
                cardHeader.appendChild(vote);

                let title = document.createElement("div");
                title.classList.add("title");
                title.innerHTML += `${response[i].title}`;
                cardHeader.appendChild(title);

                /*desc under cardContent */
                let desc=document.createElement("div");
                desc.innerText=`${response[i].overview}`;
                desc.classList.add("desc");
                cardContent.appendChild(desc);

                
                
                card.addEventListener("click", (event) => {
                    event.preventDefault();
                    window.location.href = `/details.html?movie=${response[i].id}`;
                })
                console.log(response[i]);
            };

        })
        .catch(err => console.error(err));


    for (let i = 0; i < scrollbtnleftall.length; i++) {
        scrollbtnleftall[i].addEventListener('click', (event) => {
            event.preventDefault();
            allMovieTray[i].scrollLeft -= allMovieTray[i].clientWidth;
        });
    }

    for (let i = 0; i < scrollbtnrightall.length; i++) {
        scrollbtnrightall[i].addEventListener('click', (event) => {
            event.preventDefault();
            allMovieTray[i].scrollLeft += allMovieTray[i].clientWidth;
        });
    }



});
