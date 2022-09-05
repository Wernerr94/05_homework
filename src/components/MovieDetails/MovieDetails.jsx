import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import api from 'services/movieAPI';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    if (movieId) {
      api.getMovieById(movieId).then(data => setMovie(data));
    }
  }, [movieId]);
  return (
    <div>
      <Link to={backLink}>
        <button type="button" className={css.goBackButton}>
          Go Back
        </button>
      </Link>
      <div className={css.movieInfo}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={240}
          />
        )}
        <div>
          <h1>
            {movie.title} ({movie.release_date?.split('-')[0]})
          </h1>

          <p>User score: {movie.vote_average?.toFixed(1) * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className={css.genresList}>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.addInfo}>
        <p>Additional information</p>
        <ul>
          <li className={css.addInfoLinks}>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li className={css.addInfoLinks}>
            <Link to="review" state={{ from: location.state?.from }}>
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
