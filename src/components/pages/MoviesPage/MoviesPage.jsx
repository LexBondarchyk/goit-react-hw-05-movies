import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/pages/Search/Search';
import { fetchByQuery } from 'Api/api';
import MovieList from 'components/Movies/MovieList';
import PageHeading from 'components/pages/MoviesPage/Pageheading';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const fetchMovie = () => {
      setLoading(true);
      fetchByQuery(searchRequest)
        .then(results => {
          if (!results.length) {
            alert('No movies found!');
          }

          setMovies(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
        })
        .finally(setLoading(false));
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
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}

        <SearchBar onSearch={onSubmit} />
        {movies && <MovieList movies={movies} prevLocation={location} />}
      </div>
    </>
  );
};

export default MoviesPage;
