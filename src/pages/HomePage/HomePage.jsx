import styles from './HomePage.module.css';
import MovieList from 'components/MoviesList/MovieList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies  } from 'Api/api';

import Notiflix from 'notiflix';


export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
      const res = await getMovies(movieId)
      if (res.length === 0 ) {
        Notiflix.Notify.failure('No found actors!');
      }
      setMovies(res);
    } catch (error) {
      setError('Ooops. Something went wrong...');
    } finally {
      setLoading(false);
    }
  };
  fetchMovies();
}, [movieId]);


  return (
      <div>
        <h1 className={styles.title}>Trending Movies</h1>
        {loading ? Notiflix.Loading.pulse() : Notiflix.Loading.remove()}
          {error && Notiflix.Notify.failure(`${error}`)}
        {movies && <MovieList movies={movies} />}
      </div>
  );
}
