import * as GetTrandingMovies from 'components/api-service/api';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMvies] = useState([]);

  useEffect(() => {
    GetTrandingMovies.getTrending().then(data => setMvies(data));
  }, []);

  return <MoviesList movies={movies} />;
};

export default Home;
