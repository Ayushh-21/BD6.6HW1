const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const { getAllMovies, getMovieById } = require('./controllers/index.js');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/movies', async (req, res) => {
  let movies = await getAllMovies();
  res.json({ movies });
});

app.get('/movies/details/:id', async (req, res) => {
  let id = parseInt(req.params.id);
  let movie = await getMovieById(id);
  res.json({ movie });
});

module.exports = { app };
