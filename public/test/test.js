const index = require("../js/index");
const tape = require("tape");

let movieResult = {
  title: "Spider-Man: Far from Home",
  poster: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
  lang: "en",
  overview:
    "Peter Parker and his friends go on a summer trip t…sasters and destruction throughout the continent.",
  releaseDate: "2019-06-28"
};

let newsResult = {
  imageLink:
    "https://cdn.vox-cdn.com/thumbor/Kczb0iWKZ21gs1EkdT…8275958/Screen_Shot_2019_07_02_at_11.05.39_AM.png",
  title:
    "The first trailer for Rian Johnson’s Knives Out is a wild take on whodunits",
  description:
    "Rian Johnson’s first movie after directing and wri…tars Chris Evans, Daniel Craig, Lakeith Stanfiel…",
  source:
    "https://www.theverge.com/2019/7/2/20678967/rian-jo…daniel-craig-jamie-lee-curtis-star-wars-last-jedi",
  author: "Julia Alexander"
};

tape("Test Movies api", t => {
  let expected = "Spider-Man: Far from Home";
  let actual = movieResult.title;
  console.log(actual);
  t.deepEqual(actual, expected);
  t.end();
});

tape("Test News api", t => {
  let expected =
    "The first trailer for Rian Johnson’s Knives Out is a wild take on whodunits";
  let actual = newsResult.title;
  console.log(actual);
  t.deepEqual(actual, expected);
  t.end();
});
