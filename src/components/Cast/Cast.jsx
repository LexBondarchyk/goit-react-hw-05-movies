
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'Api/api';
import NotFoundView from '../pages/NotFoundPage/NotFoundView';
import Faceless from '../../images/broken_img.png';

import style from './Cast.module.css';
const MovieCast = () => {
  const { movieId } = useParams();

  const [movieCast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesCredits(movieId);
        setCast(res);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <NotFoundView/>}
      {movieCast.length ? (
      <ul className={style.castList}>
          {movieCast.slice(0, 12).map(castItem => (
            <li key={castItem.cast_id} className={style.castItem}>
              <img
                src={
                  castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${castItem.profile_path}`
                    : Faceless
                }
                alt={`${castItem.name}`}
              />
              <div>
                <p>{castItem.name}</p>
                <p>
                  Character:
                  <span>{castItem.character}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default MovieCast;