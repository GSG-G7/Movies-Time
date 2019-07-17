const moviesSection = document.querySelector("#movies");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const newsContainer = document.getElementById("news");

getMovies((arr)=>{
  const movieArr = [];
  arr.some((element , index)=>{
    movieArr.push({
      title: element.title,
      poster: element.poster_path,
      lang: element.original_language,
      overview: element.overview,
      releaseDate: element.release_date,
      

    })
    return index === 11;
  })

  manageRender("movie" , movieArr);

})

function manageRender(check , arr){

  if(check === 'movie'){
    arr.forEach((element)=>{
      createMovie(element);
    })
  }
  else if( check === 'news'){
    arr.forEach((element)=>{
      showNews(element);
    })
  }
}

getNews((arr)=>{
  const newsArr = [];
  // This Method for get specific number of element from original array
  arr.some((element , index)=>{
    newsArr.push({
      imageLink: element.urlToImage,
      title: element.title,
      description: element.description,
      source: element.url,
      author: element.author,
      published: element.publishedAt
    })

    return index === 5;
  })

  manageRender('news' , newsArr)
})
  

const createMovie = (obj) => {
  let movieDiv = document.createElement("div");
  let movieTitle = element("h2", obj.title);
  let moviePoster = document.createElement("img");
  let movieLang = element("span", obj.lang);
  let moviePar = element("p", obj.overview);
  let movieDate = element("span", obj.releaseDate);
  moviePoster.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${obj.poster}`;
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
