import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from 'services/movieAPI';
import css from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie');

  const handleSubmit = e => {
    e.preventDefault();
    if (query !== '') {
      setSearchParams({ movie: query });
      api.getMovieByQuery(query).then(data => setMovies(data.results));
    }
  };
  useEffect(() => {
    if (query === '' && movie !== null) {
      api.getMovieByQuery(movie).then(data => setMovies(data.results));
    }
  }, [movie, query]);
  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          autoFocus
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
      <ul className={css.resultList}>
        {movies.map(mov => (
          <li key={mov.id} className={css.resultList__item}>
            <Link
              to={`/movies/${mov.id}`}
              state={{ from: `/movies?${searchParams}` }}
            >
              {mov.poster_path ? (
                <img
                  className={css.resultList__itemImage}
                  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  alt={mov.title}
                />
              ) : (
                <img src={'http://dummyimage.com/240x360'} alt={mov.title} />
              )}

              <h4>
                {mov.title}({mov.release_date?.split('-')[0]})
              </h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
// 240x360
