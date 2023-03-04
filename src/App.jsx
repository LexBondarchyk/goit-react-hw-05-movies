import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppBar  from './components/AppBar/AppBar';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails/MoviesDetails'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const NotFoundView = lazy(() => import('./pages/NotFoundPage/NotFoundView'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<AppBar/>}>
          <Route index element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};