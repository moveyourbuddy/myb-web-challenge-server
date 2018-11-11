const express = require("express");
const app = express();

const Players = require("./models");

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/players/:id", (req, res) => {
  const playerId = Number(req.params.id);
  res.json(Players.getPlayer(playerId));
});

app.get("/players/:id/friends", (req, res) => {
  const playerId = Number(req.params.id);
  res.json(Players.getFriends(playerId));
});

app.get("/players/:id/lastEvents", (req, res) => {
  const playerId = Number(req.params.id);
  res.json(Players.getLastEvents(playerId));
});

app.get("/events/:id", (req, res) => {
  const eventId = Number(req.params.id);
  res.json(Players.getEvent(eventId));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
