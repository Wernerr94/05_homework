import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
