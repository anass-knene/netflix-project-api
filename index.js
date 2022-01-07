const express = require("express");
const server = express();
require("dotenv").config();
const PORT = process.env.PORT;
const {
  movies,
  newMovies,
  actionMovies,
  getMovie,
} = require("./controllers/movies");
// 1 all movies route
server.get("/movies", movies);
// 2 new movies route
server.get("/new-movies", newMovies);
// 3 action movies route
server.get("/action-movies", actionMovies);

//  3 find movie by id

server.get("/movie/:id", getMovie);

//  params ==> /:id
//  queries ==> ?id=1234
// server.get("/tv-shows", (req, res) => {
//   res.send("Tv-Shows");
// });

server.listen(PORT, () => {
  console.log(`Anass Netflix server running on port ${PORT}`);
});
