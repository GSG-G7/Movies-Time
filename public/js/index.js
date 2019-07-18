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
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
    config.movieAPI
  }&language=en-US&page=1`;

  request(url, obj => {
    callback(obj.results);
  });
}

function getNews(callback) {
  const url = `https://newsapi.org/v2/everything?q=movie&apiKey=${
    config.newsAPI
  }`;
  request(url, obj => {
    callback(obj.articles);
  });
}

function specificNumber(arr, num) {
  return arr.slice(0, num);
}
