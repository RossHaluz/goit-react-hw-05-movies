import { useLocation } from 'react-router-dom';
import {
  MoviesLists,
  MoviesListsItem,
  MoviesListsItemLink,
} from './SearchMovie.styled';

const SearchMovie = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesLists>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <MoviesListsItem key={id}>
            <MoviesListsItemLink to={`${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                width="300"
              />
              {title}
            </MoviesListsItemLink>
          </MoviesListsItem>
        );
      })}
    </MoviesLists>
  );
};

export default SearchMovie;
