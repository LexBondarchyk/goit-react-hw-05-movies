import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMoviesReviews } from 'Api/api';
import NotFoundPage from 'components/pages/NotFoundPage/NotFoundView';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        const res = await fetchMoviesReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {error && <NotFoundPage />}
        {reviews.length ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <div>
                  <h1>{author}</h1>
                  <p>{content}</p>
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

MovieReviews.defaultProps = [];

MovieReviews.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  content:PropTypes.string,
}


export default MovieReviews;
