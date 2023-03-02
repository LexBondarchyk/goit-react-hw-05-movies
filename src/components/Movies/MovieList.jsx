import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, prevLocation }) => {


  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
              {}
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MovieList;
