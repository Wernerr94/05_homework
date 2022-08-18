import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from 'services/movieAPI';
import css from './Home.module.css';

export default function Home() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    if (trends.length === 0) {
      api.getTrends().then(data => setTrends([...trends, ...data.results]));
    }
  }, [trends]);

  return (
    <div className={css.container}>
      <h1>Trends</h1>
      <ul className={css.movieList}>
        {trends.map(movie => (
          <li className={css.movieList__item} key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: '/' }}
              className={css.link}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
