<<<<<<< HEAD
const urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=fe9a692601a10b1c8f689d99796cbb82&language=en-US&page=1`;

const urlNews = "https://newsapi.org/v2/everything?";
const queryNews = "q=movie";
const newsAPI_key = "&apiKey=c97ecb4a147a402899bf700fb3acf8e5";

function getNews(query, callback) {
    const newsUrl = urlNews + query + newsAPI_key;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = _ => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const obj = JSON.parse(xhr.responseText);
            // console.log(obj.articles);
            callback(obj.articles);
        }
    };
    xhr.open("GET", newsUrl);
    xhr.send();
}

const moviesRequest = callback => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let movies = response.results;
            callback(movies);
        }
    };
    xhr.open("GET", urlMovies);
    xhr.send();
};
=======
function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = _ => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.responseText);
      callback(obj);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function getMovies(callback) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=fe9a692601a10b1c8f689d99796cbb82&language=en-US&page=1`;

  request(url, obj => {
    callback(obj.results);
  });
}

function getNews(callback) {
  const url =
    "https://newsapi.org/v2/everything?q=movie&apiKey=c97ecb4a147a402899bf700fb3acf8e5";
  request(url, obj => {
    callback(obj.articles);
  });
}
>>>>>>> 63760abea9b04d06047c1d2365a693fc465e5023

if (typeof module !== "undefined") {
    module.exports = { moviesRequest, pages };
}