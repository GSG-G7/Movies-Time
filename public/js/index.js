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

if (typeof module !== "undefined") {
  module.exports = { request };
}
