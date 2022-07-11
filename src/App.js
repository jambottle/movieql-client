import { useState, useEffect } from 'react';

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
        movieList.map(movie => {
          const { id, title, genres, summary, medium_cover_image } = movie;

          return (
            <article key={id}>
              <img src={medium_cover_image} />
              <h2>{title}</h2>
              <p>{summary}</p>
              <ul>
                {genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </article>
          );
        })
      )}
    </>
  );
}

export default App;
