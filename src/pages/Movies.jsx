import { useSearchParams, Link, useLocation } from 'react-router-dom';
import * as SearchFilmByName from 'components/api-service/api';
import { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [films, setFilms] = useSearchParams();
  const nameFilm = films.get('name') ?? '';
  const location = useLocation();

  const onChangeQueryString = name => {
    const nextName = name !== '' ? { name } : {};
    setFilms(nextName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (nameFilm === '') {
      alert('Write something in search');
      return;
    }
    SearchFilmByName.searchFilm(nameFilm).then(data => setMovies(data.results));
  };

  return (
    <>
      <h2>Search film</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameFilm}
          onChange={e => onChangeQueryString(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default Movies;
