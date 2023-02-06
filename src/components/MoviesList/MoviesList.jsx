import { useLocation } from 'react-router-dom';
import {
  MoviesLists,
  MoviesListsItem,
  MoviesListsItemLink,
  MovieListTitle,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <MovieListTitle>Trending today</MovieListTitle>
      <MoviesLists>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <MoviesListsItem key={id}>
              <MoviesListsItemLink
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                  width="300"
                  height="400"
                />
                {original_title}
              </MoviesListsItemLink>
            </MoviesListsItem>
          );
        })}
      </MoviesLists>
    </>
  );
};

export default MoviesList;
