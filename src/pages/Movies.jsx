import { useSearchParams } from 'react-router-dom';
import * as SearchFilmByName from 'components/api-service/api';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchMovie from 'components/SearchMovie';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [films, setFilms] = useSearchParams();
  const nameFilm = films.get('name') || '';

  const handleSubmit = e => {
    e.preventDefault();
    setMovies([]);
    setError(null);
    const form = e.target;
    const searchQuery = form.searchName.value;
    if (searchQuery === '') {
      alert('Введіть текст у пошук!');
      return;
    }
    setFilms({ name: searchQuery });
  };

  useEffect(() => {
    if (nameFilm === '') {
      return;
    }
    SearchFilmByName.searchFilm(nameFilm)
      .then(data => {
        if (!data.results.length) {
          throw new Error();
        }
        setMovies(data.results);
      })
      .catch(error => {
        setError({ error });
      });
  }, [nameFilm]);

  return (
    <>
      <h2>Search film</h2>
      {error && <p>Щось пішло не так. Оновіть сторінку.</p>}
      <SearchForm onSubmit={handleSubmit} />
      {movies && <SearchMovie movies={movies} />}
    </>
  );
};

export default Movies;
