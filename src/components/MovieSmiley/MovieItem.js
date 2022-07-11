function MovieItem({ movie }) {
  const { title, title_long, genres, summary, medium_cover_image } = movie;

  return (
    <article>
      <img alt={title} src={medium_cover_image} />
      <h2>{title_long}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </article>
  );
}

export default MovieItem;
