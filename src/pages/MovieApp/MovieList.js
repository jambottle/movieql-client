import { useState, useEffect } from 'react';

import MovieItem from '../../components/MovieApp/MovieItem';
import styles from './MovieList.module.css';

function MovieList() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    );
    const { data } = await response.json();

    setMovieList(data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <main className={styles.container}>
      {isLoading ? (
        <aside className={styles.loader}>
          <span>Loading...</span>
        </aside>
      ) : (
        <section className={styles.movies}>
          {movieList.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </section>
      )}
    </main>
  );
}

export default MovieList;
