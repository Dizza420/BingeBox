const wrapper = document.querySelector(".wrapper");
const idparams = new URLSearchParams(window.location.search);
const searchTv = "https://api.themoviedb.org/3/tv/";
const searchMovie = "https://api.themoviedb.org/3/movie/";
const ApiKey = "435611b4da39d57c8e9c7a511d9b28c1";
const images = "https://image.tmdb.org/t/p/original/";

if (idparams.get("movie")) {
  var id = idparams.get("movie");
  fetch(`${searchMovie}${id}?api_key=${ApiKey}`)
    .then(response => response.json())
    .then(response => {
      wrapper.innerHTML += `
            <img src="${images}${response.poster_path}" alt="">`;
      const val = document.createElement("div");
      val.innerHTML += `
            <h1>${response.title}</h1>
            <p>${(response.overview)?response.overview:"Nothing Available"}</p>
            `;
      const genres = document.createElement("ul");
      genres.classList.add("genres");
      for (let i = 0; i < response.genres.length; i++) {
        genres.innerHTML += `<li>${response.genres[i].name}</li>`;

      }
      val.appendChild(genres);
      const cast = document.createElement("div");
      cast.classList.add("cast");
      cast.innerHTML += "<h3>Cast</h3>"
      const castMain = document.createElement("div");
      castMain.classList.add("castMain");
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}`)
        .then(response => response.json())
        .then(response => {
          for (let i = 0; i < response.cast.length; i++) {
            if (!response.cast[i].profile_path) {
              castMain.innerHTML += `
                <li>
                <img src="/assets/blankCast.svg"/>
                <p>${response.cast[i].name}</p>
                <p>${response.cast[i].character}</p>
                </li>
          `;
            }
            else {
              castMain.innerHTML += `
                <li>
                <img src="${images}${response.cast[i].profile_path}"/>
                <p>${response.cast[i].name}</p>
                <p>${response.cast[i].character}</p>
                </li>
          `;
            };

          };
          cast.appendChild(castMain);
          val.appendChild(cast);
        })
      wrapper.appendChild(val);


      console.log(response);
    })
    .catch(err => console.error(err));
}
else if (idparams.get("tv")) {
  var id = idparams.get("tv");
  fetch(`${searchTv}${id}?api_key=${ApiKey}`)
    .then(response => response.json())
    .then(response => {
      wrapper.innerHTML += `
      <img src="${images}${response.poster_path}" alt="">`;
      const val = document.createElement("div");
      val.innerHTML += `
      <h1>${response.name}</h1>
      <p>${(response.overview)?response.overview:"Nothing Available"}</p>
      `;
      const genres = document.createElement("ul");
      genres.classList.add("genres");
      for (let i = 0; i < response.genres.length; i++) {
        genres.innerHTML += `<li>${response.genres[i].name}</li>`;

      }
      val.appendChild(genres);
      const cast = document.createElement("div");
      cast.classList.add("cast");
      cast.innerHTML += "<h3>Cast</h3>"
      const castMain = document.createElement("div");
      castMain.classList.add("castMain");
      fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${ApiKey}`)
        .then(response => response.json())
        .then(response => {
          for (let i = 0; i < response.cast.length; i++) {
            if (!response.cast[i].profile_path) {
              castMain.innerHTML += `
          <li>
          <img src="/assets/blankCast.svg"/>
          <p>${response.cast[i].name}</p>
          <p>${response.cast[i].character}</p>
          </li>
    `;
            }
            else {
              castMain.innerHTML += `
          <li>
          <img src="${images}${response.cast[i].profile_path}"/>
          <p>${response.cast[i].name}</p>
          <p>${response.cast[i].character}</p>
          </li>
    `;
            };

          };
          cast.appendChild(castMain);
          val.appendChild(cast);
        })
      wrapper.appendChild(val);
      console.log(response);
    })
    .catch(err => console.error(err));
}