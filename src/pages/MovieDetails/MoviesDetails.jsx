import s from './MoviesDetails.module.css';

import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'Api/api';
import PageHeading from 'components/PageHeading/Pageheading';
import Notiflix from 'notiflix';
import WithoutPost from '../../images/facelessposter.png';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const getYear = () => new Date(movie.release_date).getFullYear();


  let activeClassName = {
    color: '#0000',
  };
const linkBack = location?.state?.from ?? '/';
  const handleClick = () => navigate(linkBack);

  useEffect(() => {
  const fetchMovie = async () => {
    try {
    setLoading(true);
    const res = await fetchMoviesDetails(movieId);
    if (res.length === 0 ) {
      Notiflix.Notify.failure('No found details');
    }
    setMovie(res);
  } catch (error) {
    setError('Ooops. Something went wrong...');
  } finally {
    setLoading(false);
  }
};
fetchMovie();
  }, [movieId]);

  return (
    <>
      <div>
        <button onClick={handleClick} className={s.backButton}>
          Go back
        </button>

        {movie && <PageHeading text={movie.title} />}
        {loading ? Notiflix.Loading.pulse() : Notiflix.Loading.remove()}
        {error && Notiflix.Notify.failure(`${error}`)}
         {movie && (
          <div>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : WithoutPost}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div className="movie_overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
        <hr className={s.hr}/>
        <div>
          <h2>Additional Information</h2>
          <div className={s.but_det}>
          <NavLink
            to= 'reviews'
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={{from: linkBack}}
          >
            <p className={s.reviews}>Reviews</p>
          </NavLink>
          <NavLink
            to='cast'
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={{from: linkBack}}
          >
            <p className={s.cast}>Cast</p>
          </NavLink>
          </div>
          <hr className={s.hr}/>
          <Outlet />
        </div>
      </div>
    </>
  );
}
