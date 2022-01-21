const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
server.use(cors());
const {
  tvShows,
  actionTvShows,
  newTvShows,
  getTvShow,
  getTvShowEpisode,
  getTvShowSeason,
} = require("./controllers/tvShows");
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
// ****************Tv Shows ****************************

// 1 all tv show
server.get("/tv-shows", tvShows);

// });
// 2 action tv shows
server.get("/action-tv-shows", actionTvShows);
// 3 new tv show
server.get("/new-tv-shows", newTvShows);
// 4 find tv show by id
server.get("/tv-shows/:id", getTvShow);
// 5 find tv episodes by id => /:tvShowId/:episodes
/* 
req.params={
  tvShowId:xxx,
  seasonId:xxx,
  episodeId:xxx
}
*/
server.get("/tv-show-episode/:tvShowId/:seasonId/:episodeId", getTvShowEpisode);
server.get("/tv-show-season/:tvShowId/:seasonId", getTvShowSeason);

server.listen(PORT, () => {
  console.log(`Anass Netflix server running on port ${PORT}`);
});
