import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './MovieItem.module.css';

function MovieItem({ movie }) {
  const { id, title, year, genres, summary, medium_cover_image } = movie;

  return (
    <article className={styles.movie}>
      <img
        alt={title}
        src={medium_cover_image}
        className={styles.movie__image}
      />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 240 ? `${summary.slice(0, 240)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
  }),
};

export default MovieItem;
