import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieItem({ movie }) {
  const { title, title_long, genres, summary, medium_cover_image } = movie;

  return (
    <article>
      <img alt={title} src={medium_cover_image} />
      <h2>
        <Link to="/movie">{title_long}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </article>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
  }),
};

export default MovieItem;
