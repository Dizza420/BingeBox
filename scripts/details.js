import ApiKey from "./mainApi.js";
const wrapper = document.querySelector(".wrapper");
const idparams = new URLSearchParams(window.location.search);
const searchTv = "https://api.themoviedb.org/3/tv/";
const searchMovie = "https://api.themoviedb.org/3/movie/";
const images = "https://image.tmdb.org/t/p/original/";
let options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ApiKey}`
  }
};


if (idparams.get("movie")) {
  var id = idparams.get("movie");
  fetch(`${searchMovie}${id}`,options)
    .then(response => response.json())
    .then(response => {
      document.body.style.background = `linear-gradient(to right, rgb(0 0 0 / 59%), rgb(0 0 0 / 59%)),url(${images}${response.poster_path})`;
      document.body.style.backgroundSize = `100%`;
      document.body.style.backdropFilter="blur(2px)"
      document.body.style.backdropFilter = `blur(2px)`;
      document.body.style.backgroundAttachment = "fixed";

      const poster=document.createElement("img");
      poster.loading="lazy";
      poster.src = `${images}${response.poster_path}`;
      poster.classList.add("poster");
      wrapper.appendChild(poster);

      const val = document.createElement("div");
      val.innerHTML += `
      <h1>${response.title}</h1>
      <p>${(response.overview) ? response.overview : "Nothing Available"}</p>
      `;
      const genres = document.createElement("ul");
      genres.classList.add("genres");
      for (let i = 0; i < response.genres.length; i++) {
        genres.innerHTML += `<li>${response.genres[i].name}</li>`;

      }
      val.appendChild(genres);

      const cast = document.createElement("div");
      cast.classList.add("cast");
      const castHeader=document.createElement("div");
      castHeader.classList.add("cast-header");
      castHeader.innerHTML += "<h3>Cast</h3>"

      let buttons= document.createElement("div");
      buttons.classList.add("buttons");
      let leftBt =document.createElement("div");
      leftBt.classList.add("LeftBt");
      leftBt.innerHTML=`<img src="assets/left.svg"/>`;
      let rightBt =document.createElement("div");
      rightBt.classList.add("RightBt");
      rightBt.innerHTML=`<img src="assets/right.svg"/>`;
      buttons.appendChild(leftBt);
      buttons.appendChild(rightBt);
      castHeader.appendChild(buttons);
      cast.appendChild(castHeader);
      
      const castMain = document.createElement("div");
      castMain.classList.add("castMain");
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits`,options)
        .then(response => response.json())
        .then(response => {

          for (let i = 0; i < response.cast.length; i++) {
            let castCard =document.createElement("div");
            castCard.classList.add("cast-card");
            castMain.appendChild(castCard);

            let castImg=document.createElement("img");
            castImg.loading="lazy";
            castImg.classList.add("cast-img");
            (response.cast[i].profile_path)?(castImg.src=(images+response.cast[i].profile_path)):(castImg.src="/assets/blankCast.svg");
            castCard.appendChild(castImg);

            let castName=document.createElement("p");
            castName.classList.add("cast-name");
            castName.innerHTML=`${response.cast[i].name}`;
            castCard.appendChild(castName);

            let castChar=document.createElement("p");
            castChar.classList.add("cast-char");
            castChar.innerHTML=`${response.cast[i].character}`;
            castCard.appendChild(castChar);

          };

          cast.appendChild(castMain);
          val.appendChild(cast);
          leftBt.addEventListener("click",(event)=>{
            event.preventDefault();
            castMain.scrollLeft-=500;
          });
          rightBt.addEventListener("click",(event)=>{
            event.preventDefault();
            castMain.scrollLeft+=500;
          });
        })
      wrapper.appendChild(val);
      let reviews = document.createElement("div");
      reviews.classList.add("reviews");
      fetch(`https://api.themoviedb.org/3/movie/${id}/reviews`,options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
          if(!response || response.length===0){
            reviews.innerHTML=`There are no reviews for this show!`;
          }
          else{
            for (let i = 0; i < response.length; i++) {
            let review = document.createElement("div");
            review.classList.add("review");

            let reviewAuth=document.createElement("div");
            reviewAuth.classList.add("review-auth");
            reviewAuth.innerHTML=`${response[i].author}`; 
            review.appendChild(reviewAuth);

            let reviewContent =document.createElement("div");
            reviewContent.classList.add("review-content");
            reviewContent.innerHTML=`${response[i].content}`;
            review.appendChild(reviewContent);     
            
            reviews.appendChild(review);
            console.log(review);
          }
          }
          

        })
      document.body.appendChild(reviews);
      console.log(response);
    })
    .catch(err => console.error(err));
}
else if (idparams.get("tv")) {
  var id = idparams.get("tv");
  fetch(`${searchTv}${id}`,options)
    .then(response => response.json())
    .then(response => {
      document.body.style.background = `linear-gradient(to right, rgb(0 0 0 / 59%), rgb(0 0 0 / 59%)),url(${images}${response.backdrop_path})`;
      document.body.style.backgroundSize = `cover`;
      document.body.style.backdropFilter = `blur(2px)`;
      document.body.style.backgroundAttachment = "fixed";

      const poster=document.createElement("img");
      poster.src = `${images}${response.poster_path}`;
      poster.loading="lazy";
      poster.classList.add("poster");
      wrapper.appendChild(poster);

      const val = document.createElement("div");
      val.innerHTML += `
      <h1>${response.name}</h1>
      <p>${(response.overview) ? response.overview : "Nothing Available"}</p>
      `;
      const genres = document.createElement("ul");
      genres.classList.add("genres");
      for (let i = 0; i < response.genres.length; i++) {
        genres.innerHTML += `<li>${response.genres[i].name}</li>`;

      }
      val.appendChild(genres);

      const cast = document.createElement("div");
      cast.classList.add("cast");
      const castHeader=document.createElement("div");
      castHeader.classList.add("cast-header");
      castHeader.innerHTML += "<h3>Cast</h3>"

      let buttons= document.createElement("div");
      buttons.classList.add("buttons");
      let leftBt =document.createElement("div");
      leftBt.classList.add("LeftBt");
      leftBt.innerHTML=`<img src="assets/left.svg"/>`;
      let rightBt =document.createElement("div");
      rightBt.classList.add("RightBt");
      rightBt.innerHTML=`<img src="assets/right.svg"/>`;
      buttons.appendChild(leftBt);
      buttons.appendChild(rightBt);
      castHeader.appendChild(buttons);
      cast.appendChild(castHeader);
      
      const castMain = document.createElement("div");
      castMain.classList.add("castMain");
      fetch(`https://api.themoviedb.org/3/tv/${id}/credits`,options)
        .then(response => response.json())
        .then(response => {

          for (let i = 0; i < response.cast.length; i++) {
            let castCard =document.createElement("div");
            castCard.classList.add("cast-card");
            castMain.appendChild(castCard);

            let castImg=document.createElement("img");
            castImg.classList.add("cast-img");
            castImg.loading="lazy";
            (response.cast[i].profile_path)?(castImg.src=(images+response.cast[i].profile_path)):(castImg.src="/assets/blankCast.svg");
            castCard.appendChild(castImg);

            let castName=document.createElement("p");
            castName.classList.add("cast-name");
            castName.innerHTML=`${response.cast[i].name}`;
            castCard.appendChild(castName);

            let castChar=document.createElement("p");
            castChar.classList.add("cast-char");
            castChar.innerHTML=`${response.cast[i].character}`;
            castCard.appendChild(castChar);

          };

          cast.appendChild(castMain);
          val.appendChild(cast);
          leftBt.addEventListener("click",(event)=>{
            event.preventDefault();
            castMain.scrollLeft-=500;
          });
          rightBt.addEventListener("click",(event)=>{
            event.preventDefault();
            castMain.scrollLeft+=500;
          });
        })
      wrapper.appendChild(val);
      let reviews = document.createElement("div");
      reviews.classList.add("reviews");
      fetch(`https://api.themoviedb.org/3/tv/${id}/reviews`,options)
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
          if(!response || response.length===0){
            reviews.innerHTML=`There are no reviews for this show!`;
          }
          else{
            for (let i = 0; i < response.length; i++) {
            let review = document.createElement("div");
            review.classList.add("review");

            let reviewAuth=document.createElement("div");
            reviewAuth.classList.add("review-auth");
            reviewAuth.innerHTML=`${response[i].author}`; 
            review.appendChild(reviewAuth);

            let reviewContent =document.createElement("div");
            reviewContent.classList.add("review-content");
            reviewContent.innerHTML=`${response[i].content}`;
            review.appendChild(reviewContent);     
            
            reviews.appendChild(review);
            console.log(review);
          }
          }
          

        })
      document.body.appendChild(reviews);
      console.log(response);
    })
    .catch(err => console.error(err));
}
