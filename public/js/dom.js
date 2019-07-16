const moviesSection = document.querySelector("#movies");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Adding the movies to the HTML
moviesRequest(movies => {
  movies.forEach(movie => {
    createMovie(
      movie.title,
      movie.poster_path,
      movie.original_language,
      movie.overview,
      movie.release_date
    );
  });
});
const createMovie = (title, poster, lang, overview, release_date) => {
  let movieDiv = document.createElement("div");
  let movieTitle = element("h2", title);
  let moviePoster = document.createElement("img");
  let movieLang = element("span", lang);
  let moviePar = element("p", overview);
  let movieDate = element("span", release_date);
  moviePoster.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`;
  movieDiv.appendChild(movieTitle);
  movieDiv.appendChild(moviePoster);
  movieDiv.appendChild(movieLang);
  movieDiv.appendChild(moviePar);
  movieDiv.appendChild(movieDate);
  moviesSection.appendChild(movieDiv);
};

// Create element in browser
const element = (e, content) => {
  let x = document.createElement(e);
  x.textContent = content;
  return x;
};
