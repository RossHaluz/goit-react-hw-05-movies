import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BackButton,
  MovieCartCover,
  MovieTitle,
  MovieCartInfo,
  MovieCartInfoOverview,
  MovieCartInfoDesc,
} from './MovieDetailsCart.styled';

const MovieDetailsCart = ({ film }) => {
  const location = useLocation();
  const locRef = useRef(location.state.from ?? '/movies');

  return (
    <>
      <BackButton to={locRef.current}>Назад</BackButton>
      {film && (
        <MovieCartCover>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt={film.original_title}
            width="300"
          />
          <MovieCartInfo>
            <MovieTitle>{film.title}</MovieTitle>
            <MovieCartInfoOverview>Overview</MovieCartInfoOverview>
            <MovieCartInfoDesc>{film.overview}</MovieCartInfoDesc>
            <h3>Genres</h3>
          </MovieCartInfo>
        </MovieCartCover>
      )}
    </>
  );
};

export default MovieDetailsCart;
