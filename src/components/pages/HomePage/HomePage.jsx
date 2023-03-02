import styles from './HomePage.module.css';
import MovieList from 'components/Movies/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from 'Api/api';
import NotFoundView from 'components/pages/NotFoundPage/NotFoundView';
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
         })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  const isNotFound = !loading && !movies.length;
  return (
    <>
      <div>
        <h1 className={styles.title}>Trending Movies</h1>
        {(loading && Notiflix.Loading.pulse()) ||
        (!loading && Notiflix.Loading.remove())}
        {isNotFound && <NotFoundView />}
        {error && Notiflix.Notify.failure(`${error}`)}
        {movies && <MovieList movies={movies} />}
      </div>
    </>
  );
}
