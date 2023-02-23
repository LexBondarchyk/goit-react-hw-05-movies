// import SearchBar from 'components/MoviesPage/MoviesPage';

import PageHeading from 'components/Pageheading/Pageheading';
import MovieList from 'components/TrendingMovies/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from 'Api/api';
import NotFoundView from 'ui/NotFoundView';
import Notiflix from 'notiflix';


export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(results => {
          setMovies(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  const isNotFound = !loading && !movies.length;
  return (
    <>
      <div>
        <PageHeading text={'Trending Movies'}></PageHeading>
        {(loading && Notiflix.Loading.pulse()) ||
        (!loading && Notiflix.Loading.remove())}
        {isNotFound && <NotFoundView />}
        {error && Notiflix.Notify.failure(`${error}`)}
        {movies && <MovieList movies={movies} />}
      </div>
    </>
  );
}
