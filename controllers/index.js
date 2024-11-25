let movies = [
  {
    movieId: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    director: 'Christopher Nolan',
  },
  {
    movieId: 2,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    director: 'Frank Darabont',
  },
  {
    movieId: 3,
    title: 'The Godfather',
    genre: 'Crime',
    director: 'Francis Ford Coppola',
  },
];

const getAllMovies = () => {
  return movies;
};

const getMovieById = (id) => {
  let movie = movies.find((mov) => mov.movieId === id);
  return movie;
};

module.exports = { getAllMovies, getMovieById };
