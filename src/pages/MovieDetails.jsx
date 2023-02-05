import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import * as GetFilmDetails from 'components/api-service/api';
import MovieDetailsCart from 'components/MovieDetails';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f896ccabafb5d2939071b9f1aa9e42c1`
    )
      .then(res => res.json())
      .then(data => setFilm(data));
  }, [movieId]);

  return <MovieDetailsCart film={film} />;
};

export default MovieDetails;
