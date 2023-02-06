import axios from 'axios';

const API_KEY = 'f896ccabafb5d2939071b9f1aa9e42c1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return data.results;
};

export const getFilmDetails = async movieId => {
  const responce = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);

  return responce;
};

export const searchFilm = async name => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`
  );

  return data;
};

export const castCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return response;
};
