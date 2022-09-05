import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieAPI';
import css from './Cast.module.css';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      api.getCastById(movieId).then(data => setMovieCast(data.cast));
    }
  }, [movieId]);
  return (
    <div>
      <ul className={css.castList}>
        {movieCast &&
          movieCast.map(actor => (
            <li key={actor.id} className={css.castListCard}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : 'http://dummyimage.com/100x150'
                }
                alt={actor.name}
                width={100}
              />

              <h4>{actor.name}</h4>
              <p>Charecter : {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
