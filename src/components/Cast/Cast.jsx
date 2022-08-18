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
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width={100}
                />
              ) : (
                <img src="http://dummyimage.com/100x150" alt="Character" />
              )}
              <h4>{actor.name}</h4>
              <p>Charecter : {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
