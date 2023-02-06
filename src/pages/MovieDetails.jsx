import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as GetFilmDetails from 'components/api-service/api';
import MovieDetailsCart from 'components/MovieDetails';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    GetFilmDetails.getFilmDetails(movieId).then(data => setFilm(data.data));
  }, [movieId]);

  return <MovieDetailsCart film={film} />;
};

export default MovieDetails;
