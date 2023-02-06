import { useLocation } from 'react-router-dom';
import {
  MoviesLists,
  MoviesListsItem,
  MoviesListsItemLink,
} from './SearchMovie.styled';
import DefaultImg from 'components/default.jpg';

const SearchMovie = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesLists>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <MoviesListsItem key={id}>
            <MoviesListsItemLink to={`${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : DefaultImg
                }
                alt={title}
                width="300"
                height="350"
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
