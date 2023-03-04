import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'Api/api';
import Notiflix from 'notiflix';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const { movieId } = useParams();


  useEffect(() => {
    const fetchReviews = async id => {
      try {
        setLoading(true) 
        const res = await fetchMoviesReviews(movieId);
        if (res.length === 0 ) {
          Notiflix.Notify.failure('No found reviews!');
        }
        setReviews(res);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {loading ? Notiflix.Loading.pulse() : Notiflix.Loading.remove()}
          {error && Notiflix.Notify.failure(`${error}`)}
        {reviews &&
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <div>
                  <p>{author}</p>
                  <p>{content}</p>
                </div>
              </li>
             ))}
          </ul>
    }
  </>
  );
};



export default Reviews;
