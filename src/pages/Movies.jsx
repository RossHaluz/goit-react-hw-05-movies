import { useSearchParams, Link, useLocation } from 'react-router-dom';
import * as SearchFilmByName from 'components/api-service/api';
import { useState } from 'react';
import { useEffect } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [films, setFilms] = useSearchParams();
  const nameFilm = films.get('name') || '';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const searchQuery = form.searchName.value;
    setFilms({ name: searchQuery });
  };

  useEffect(() => {
    if (nameFilm === '') {
      return;
    }

    SearchFilmByName.searchFilm(nameFilm).then(data => setMovies(data.results));
  }, [nameFilm]);

  return (
    <>
      <h2>Search film</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchName" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies &&
          movies
            .filter(movie =>
              movie.title.toLowerCase().includes(nameFilm.toLowerCase())
            )
            .map(({ id, poster_path, title }) => {
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
            })}
      </ul>
    </>
  );
};

export default Movies;
