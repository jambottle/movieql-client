import { gql, useQuery } from '@apollo/client';

import MovieListItem from '../../components/MovieApp/MovieListItem';
import styles from './MovieList.module.css';

const GET_ALL_MOVIES = gql`
  query getAllMovies {
    allMovies {
      id
      title
      year
      genres
      summary
      medium_cover_image
    }
  }
`;

function MovieList() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);

  return (
    <main className={styles.container}>
      {loading && (
        <aside className={styles.loader}>
          <span>Loading...</span>
        </aside>
      )}

      {error && (
        <aside className={styles.loader}>
          <span>Failed to fetch.</span>
        </aside>
      )}

      <section className={styles.movies}>
        {data?.allMovies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}

export default MovieList;
