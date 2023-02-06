import { Link, useLocation } from 'react-router-dom';

const SearchMovie = ({ movies }) => {
  const location = useLocation();

  return movies.map(({ id, poster_path, title }) => {
    return (
      <li key={id}>
        <Link to={`${id}`} state={{ from: location }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="300"
          />
          {title}
        </Link>
      </li>
    );
  });
};

export default SearchMovie;
