import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieAPI';
import css from './Review.module.css';

export default function Review() {
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (movieId) {
      api.getReviewById(movieId).then(data => setMovieReview(data.results));
    }
  }, [movieId]);
  return (
    <div className={css.reviewContainer}>
      <ul>
        {movieReview.length !== 0 ? (
          movieReview.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>Currently there is no review </p>
        )}
      </ul>
    </div>
  );
}
