const moviesPlaceholder = document.querySelector("#movies");
const timeHandler = new Intl.RelativeTimeFormat("th");

function showTrailer(link) {
  const modalPlaceholder = document.querySelector("[data-modal]");
  if (!modalPlaceholder) return;

  modalPlaceholder.innerHTML = `
    <div class="modal">
        <div class="modal-window">
            <button type="button" class="modal-close">&times;</button>
            <div class="iframe">
                <iframe src="${link}" width="100%" height="auto" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>`;

  document.body.style.overflow = "hidden";

  const closeButton = modalPlaceholder.querySelector("button");

  const close = () => {
    modalPlaceholder.innerHTML = null;
    document.body.style.overflow = "auto";
  };
  closeButton.onclick = close;
  window.addEventListener(
    "keyup",
    event => {
      if (event.key === "Escape") {
        close();
      }
    },
    {
      passive: true,
      once: true
    }
  );
}

function populateMovie(movie, youtubeLink) {
  const yearsAgo = movie.Year - new Date().getFullYear();

  // Template
  const div = document.createElement("div");
  div.className = "wrapper";
  div.innerHTML = `
    <div class="wrap">
        <div class="thumbnail"><img src="${movie.Poster}"></div>
    </div>

    <div class="wrap">
        <h4 class="title">Title: <span class="text">${movie.Title}</span></h4>
        <h4 class="year">Released ${timeHandler.format(yearsAgo, "year")}</h4>
        <div class="plot">
            <h4 class="plotHeading">Story Overview:</h4>
            <div>${movie.Plot}</div>
        </div>
        <button type="button" class="trailerBtn">Trailer</button>
    </div>
</div>`;

  const trailerButton = div.querySelector("button");
  const img = div.querySelector("img");
  trailerButton.onclick = () => showTrailer(youtubeLink);
  img.onclick = () => showTrailer(youtubeLink);

  moviesPlaceholder.appendChild(div);
}

moviesObj.forEach(movie => {
  const youtube = `https://www.youtube-nocookie.com/embed/${movie.youtubeID}`;
  const urlApi = `https://www.omdbapi.com/?t=${movie.title}&apikey=8228bbbd`;

  //fetch api from omdb
  fetch(urlApi)
    .then(res => res.json()) //transform the data into json
    .then(movie => {
      populateMovie(movie, youtube);
    })
    .catch(error => console.error("Error 👍", error));
});
