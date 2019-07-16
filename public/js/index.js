const url = `https://api.themoviedb.org/3/movie/popular?api_key=fe9a692601a10b1c8f689d99796cbb82&language=en-US&page=1`;

const moviesRequest = callback => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let movies = response.results;
      callback(movies);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};

if (typeof module !== "undefined") {
  module.exports = { moviesRequest, pages };
}
