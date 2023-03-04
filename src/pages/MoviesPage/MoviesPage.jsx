import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/Search/Search';
import { fetchByQuery } from 'Api/api';
import MovieList from 'components/MoviesList/MovieList';
import PageHeading from 'components/PageHeading/Pageheading';
import Notiflix from 'notiflix';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const fetchMovie = async () => {
      try {
      setLoading(true)
      const res = await fetchByQuery(searchRequest);
      if (res.length === 0 ) {
        Notiflix.Notify.failure('No found reviews!');
      }
          setMovies(res);
        }catch (error) {
          setError('Ooops. Something went wrong...');
        } finally {
          setLoading(false);
        }
      };
    fetchMovie();
  }, [searchRequest]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <>
      <div>
        <PageHeading text={'Movie Search'} />
        {loading ? Notiflix.Loading.pulse() : Notiflix.Loading.remove()}
        {error && Notiflix.Notify.failure(`${error}`)}

        <SearchBar onSearch={onSubmit} />
        {movies && <MovieList movies={movies} />}
      </div>
    </>
  );
};

export default MoviesPage;
