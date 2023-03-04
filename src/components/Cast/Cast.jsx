
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'Api/api';
import Faceless from '../../images/broken_img.png';
import Notiflix from 'notiflix';

import style from './Cast.module.css';
const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesCredits(movieId);
        if (res.length === 0 ) {
          Notiflix.Notify.failure('No found actors!');
        }
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
      {loading ? Notiflix.Loading.pulse() : Notiflix.Loading.remove()}
      {error && Notiflix.Notify.failure(`${error}`)}
      {cast && (
      <ul className={style.castList}>
          {cast.slice(0, 12).map(castItem => (
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
      
      )}
    </>
  );
};

export default MovieCast;