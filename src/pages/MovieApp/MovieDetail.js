import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieItem from '../../components/MovieApp/MovieItem';

function MovieDetail() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});

  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const { data } = await response.json();

    setMovieDetail(data.movie);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      <h1>Detail Page</h1>
      {isLoading ? (
        <strong>Loading...</strong>
      ) : (
        <MovieItem movie={movieDetail} />
      )}
    </>
  );
}

export default MovieDetail;
