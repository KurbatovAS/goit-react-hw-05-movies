const key = 'c8a323c75721ee3e8e3a93687086175a';
const baseURL = 'https://api.themoviedb.org/3/';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function getTrendingMovies() {
  return fetch(`${baseURL}trending/movie/day?api_key=${key}`).then(res => {
    if (!res.ok) {
      return;
    }
    return res.json();
  });
}

function getMovieById(movieId) {
  return fetch(`${baseURL}movie/${movieId}?api_key=${key}`).then(res => {
    if (!res.ok) {
      return;
    }
    return res.json();
  });
}

function getMoviesBySearchQuery(query) {
  return fetch(
    `${baseURL}search/movie?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=true`
  ).then(res => {
    if (!res.ok) {
      return;
    }
    return res.json();
  });
}

function getMovieCast(movieId) {
  return fetch(
    `${baseURL}movie/${movieId}/credits?api_key=${key}&language=en-US`
  ).then(res => {
    if (!res.ok) {
      return;
    }
    return res.json();
  });
}

function getReviews(movieId) {
  return fetch(
    `${baseURL}movie/${movieId}/reviews?api_key=${key}&language=en-US`
  ).then(res => {
    if (!res.ok) {
      return;
    }
    return res.json();
  });
}

export {
  IMAGE_URL,
  getTrendingMovies,
  getMovieById,
  getMoviesBySearchQuery,
  getMovieCast,
  getReviews,
};
