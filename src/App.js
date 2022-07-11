import { useState, useEffect } from 'react';

import MovieItem from './components/MovieSmiley/MovieItem';

function App() {
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
    <>
      <h1>Movie Smiley 😎</h1>
      {isLoading ? (
        <strong>Loading...</strong>
      ) : (
        movieList.map(movie => <MovieItem key={movie.id} movie={movie} />)
      )}
    </>
  );
}

export default App;
