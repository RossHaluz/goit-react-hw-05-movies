import { useSearchParams } from 'react-router-dom';
import * as SearchFilmByName from 'components/api-service/api';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchMovie from 'components/SearchMovie';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [films, setFilms] = useSearchParams();
  const nameFilm = films.get('name') || '';

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
      <SearchForm onSubmit={handleSubmit} />
      <ul>{movies && <SearchMovie movies={movies} />}</ul>
    </>
  );
};

export default Movies;
