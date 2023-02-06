import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  BackButton,
  MovieCartCover,
  MovieTitle,
  MovieCartInfo,
  MovieCartInfoOverview,
  MovieCartInfoDesc,
  MovieListInfo,
  MovieListInfoCover,
  MovieGanreList,
  GanreTitle,
  GanreName,
} from './MovieDetailsCart.styled';

const MovieDetailsCart = ({ film }) => {
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/movies');

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
            <p>User score: {Math.ceil(film.vote_average * 10)}%</p>
            <MovieCartInfoOverview>Overview</MovieCartInfoOverview>
            <MovieCartInfoDesc>{film.overview}</MovieCartInfoDesc>
            <GanreTitle>Genres</GanreTitle>
            <MovieGanreList>
              {film.genres.map(genre => {
                return <GanreName key={genre.id}>{genre.name}</GanreName>;
              })}
            </MovieGanreList>
          </MovieCartInfo>
        </MovieCartCover>
      )}
      <MovieListInfoCover>
        <MovieListInfo to="cast">Cast</MovieListInfo>
        <MovieListInfo to="reviews">Reviews</MovieListInfo>
      </MovieListInfoCover>
      <Outlet />
    </>
  );
};

export default MovieDetailsCart;
