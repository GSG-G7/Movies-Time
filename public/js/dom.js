const moviesSection = document.querySelector("#movies");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const newsContainer = document.getElementById("news");

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

function showNews(obj) {
  const newsbox = document.createElement("div");
  const newsImag = document.createElement("img");
  const title = document.createElement("h2");
  const desc = document.createElement("p");
  const source = document.createElement("a");

  // Set attributes
  newsImag.setAttribute("src", obj.imageLink);
  title.textContent = obj.title;
  desc.textContent = obj.description;
  source.textContent = "Read More";
  source.setAttribute("href", obj.source);
  source.setAttribute("target", "_blank");

  // Append
  newsbox.appendChild(newsImag);
  newsbox.appendChild(title);
  newsbox.appendChild(desc);
  newsbox.appendChild(source);

  newsContainer.appendChild(newsbox);
}

function fetchNews(newArr) {
  newArr.forEach(element => {
    showNews(element);
  });
}

getNews(queryNews, news => {
  const newArr = [];

  for (let i = 0; i < 6; i++) {
    let obj = {
      imageLink: news[i].urlToImage,
      title: news[i].title,
      description: news[i].description,
      source: news[i].url,
      author: news[i].author,
      published: news[i].publishedAt
    };
    newArr.push(obj);
  }
  fetchNews(newArr);
});
