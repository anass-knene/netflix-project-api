const express = require("express");
const server = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

server.get("/movies", (req, res) => {
  res.send("Movies");
});
server.get("/tv-shows", (req, res) => {
  res.send("Tv-Shows");
});

server.listen(PORT, () => {
  console.log(`Anass Netflix server running on port ${PORT}`);
});
